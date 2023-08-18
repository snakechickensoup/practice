import { useState } from 'react';
import './App.css';
import Chat from './chat/Chat';

const userList = ['뽀야미', '쭈니', '잭슨'];

function App() {
  const [user, setUser] = useState('');

  return (
    <main>
      <section className='users'>
        {userList.map((name) => (
          <div key={name} className='user'>
            <div>{name}</div>
            <button type='button' onClick={() => setUser(name)}>
              대화하기
            </button>
          </div>
        ))}
      </section>
      <Chat user={user} />
    </main>
  );
}

export default App;
