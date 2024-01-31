import { useContext, useState } from 'react';
import { TodosContext } from '../store';

interface Props {
  title: string;
  id: number;
}

const TodoItem = (props: Props) => {
  const { id, title } = props;
  const { editTodo, delTodo } = useContext(TodosContext);
  const [edit, setEdit] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>(title);

  const handleEdit = () => {
    setEdit((prev) => !prev);
    editTodo(id, titleValue);
  };

  return (
    <>
      <li className='todo-item'>
        {edit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}>
            <input
              id='edit-todo-input'
              type='text'
              onChange={(e) => setTitleValue(e.target.value)}
              value={titleValue}></input>
          </form>
        ) : (
          <b>{title}</b>
        )}
        <div>
          <button
            type='button'
            onClick={() => {
              if (edit) {
                handleEdit();
              } else {
                setEdit((prev) => !prev);
              }
            }}>
            📝
          </button>
          <button type='button' onClick={() => delTodo(id)}>
            🗑️
          </button>
        </div>
      </li>
      <hr />
    </>
  );
};

export default TodoItem;
