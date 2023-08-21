import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Chat from './chat/Chat';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const userList = ['뽀야미', '쭈니', '잭슨'];

function App() {
  const [user, setUser] = useState('');
  const userName = Date.now();

  // useEffect(() => {
  //   if (user) {
  //     handleConnect();
  //   }
  // }, [user]);

  // const handleConnect = () => {
  const sockjs = () => new SockJS('http://52.78.66.72:8081/stomp/chat');
  const client = Stomp.over(sockjs);
  client.connect({}, () => {
    client.subscribe('/sub/chat/room/' + user, (sub) => {
      const subData = JSON.parse(sub.body);
      const localData = JSON.parse(localStorage.getItem(user)!);
      const data = localData ? [...localData, subData] : [subData];

      localStorage.setItem(user, JSON.stringify(data));
    });
  });
  // };

  const handleSend = (message: string) => {
    const content = { roomId: user, message, writer: userName };
    client.send('/pub/chat/message', {}, JSON.stringify(content));
  };

  return (
    <main>
      <section className='users'>
        {userList.map((name) => (
          <div key={name} className='user'>
            <div>{name}</div>
            <button
              type='button'
              onClick={() => {
                setUser(name);
              }}>
              대화하기
            </button>
          </div>
        ))}
      </section>
      <Chat user={user} onSend={handleSend} />
    </main>
  );
}

export default App;
