import { useState } from 'react';

interface Props {
  addTodo: (value: string) => void;
}

const NewTodo = (props: Props) => {
  const { addTodo } = props;
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
