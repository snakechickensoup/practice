/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit
} from 'react-router-dom';
import { createContact, getContacts } from '../Contact';
import { useEffect } from 'react';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`contacts/${contact.id}/edit`);
}

export default function Root() {
  const { contacts, q }: any = useLoaderData();

  // useNavigation returns the current navigation state:
  // it can be one of "idle" | "submitting" | "loading".
  const navigation = useNavigation();
  const submit = useSubmit();

  useEffect(() => {
    const element = document.getElementById('q') as HTMLFormElement;
    element.value = q;
  }, [q]);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <Form id='search-form' role='search'>
            {/**  GET
             *  POST가 아닌 GET이기 때문에 action 호출 x
             */}

            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search' // ?search=
              name='q' // ?q=
              defaultValue={q} // 새로고침해도 값이 남아있
              onChange={(e) => submit(e.currentTarget.form)}
              className={searching ? 'loading' : ''}
            />
            <div id='search-spinner' aria-hidden hidden={!searching} />
            <div className='sr-only' aria-live='polite'></div>
          </Form>
          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: any) => (
                <li key={contact.id}>
                  {/* NavLink는 사용자가 현재 어떤 페이지에 있는지에 따라 스타일이나 클래스를 동적으로 적용할 수 있는 기능을 제공 */}
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id='detail'
        className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  );
}
