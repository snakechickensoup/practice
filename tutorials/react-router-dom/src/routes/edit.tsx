import { Form, redirect, useLoaderData } from 'react-router-dom';
import { updateContact } from '../contact';

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

//  React Router를 사용하면 서버에서의 동작을 클라이언트 측에서 모방하여
// 사용자가 폼 제출 후 페이지를 새로고침하지 않아도 최신 데이터를 볼 수 있게 된단다
// 오옷

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form method='post' id='contact-form'>
      <p>
        <span>Name</span>
        <input
          placeholder='First'
          aria-label='First name'
          type='text'
          name='first'
          defaultValue={contact?.first}
        />
        <input
          placeholder='Last'
          aria-label='Last name'
          type='text'
          name='last'
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type='text'
          name='twitter'
          placeholder='@jack'
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder='https://example.com/avatar.jpg'
          aria-label='Avatar URL'
          type='text'
          name='avatar'
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name='notes' defaultValue={contact?.notes} rows={6} />
      </label>
      <p>
        <button type='submit'>Save</button>
        <button type='button'>Cancel</button>
      </p>
    </Form>
  );
}
