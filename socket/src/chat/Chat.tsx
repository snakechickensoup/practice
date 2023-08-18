import './Chat.css';
import ChatItem from './ChatItem';

type Props = {
  user: string;
};

const Chat = ({ user }: Props) => {
  return (
    <section className='chat'>
      <div className='chat-user'>
        <h2>{user}</h2>
      </div>
      <hr />
      <article className='chat-list'>
        <ChatItem />
      </article>
      <textarea />
    </section>
  );
};

export default Chat;
