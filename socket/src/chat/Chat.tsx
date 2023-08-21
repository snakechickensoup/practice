import { useEffect, useState } from 'react';
import './Chat.css';
import ChatItem from './ChatItem';

type Props = {
  user: string;
  onSend: (message: string) => void;
};

const Chat = (props: Props) => {
  const { user, onSend } = props;
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem(user)!));
  }, [msg]);

  return (
    <section className='chat'>
      <div className='chat-user'>
        <h2>{user}</h2>
      </div>
      <hr />
      <ul className='chat-list'>
        {messages &&
          messages.map(
            (
              message: { roomId: string; writer: string; message: string },
              idx: number
            ) => <ChatItem key={idx} {...message} />
          )}
      </ul>
      <textarea
        onKeyDown={(e) => {
          if (e.code === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const target = e.target as HTMLTextAreaElement;
            onSend(target.value);
            setMsg(target.value);
          }
        }}
      />
    </section>
  );
};

export default Chat;
