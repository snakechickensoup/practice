import NewTodo from './NewTodo';

interface Props {
  addTodo: (value: string) => void;
}

const TodoButtons = (props: Props) => {
  const { addTodo } = props;
  return (
    <div className='todo-buttons'>
      <NewTodo addTodo={addTodo} />
      <div>
        <button type='button'>Redo</button>
        <button type='button'>Undo</button>
      </div>
    </div>
  );
};

export default TodoButtons;
