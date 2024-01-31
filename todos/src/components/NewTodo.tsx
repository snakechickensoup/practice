import { useContext, useState } from 'react';
import { TodosContext } from '../store';

const NewTodo = () => {
  const { addTodo } = useContext(TodosContext);

  const [value, setValue] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTodo(value);
    setValue('');
  };
  return (
    <>
      {edit ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              id='new-todo-input'
              type='text'
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button type='submit'>Submit</button>
          </form>
          <button type='button' onClick={() => setEdit(false)}>
            Close
          </button>
        </>
      ) : (
        <button type='button' onClick={() => setEdit(true)}>
          Add New
        </button>
      )}
    </>
  );
};
export default NewTodo;
