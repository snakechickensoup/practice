import NewTodo from './NewTodo';

const TodoButtons = () => {
  return (
    <div className='todo-buttons'>
      <NewTodo />
      <div>
        <button type='button'>Redo</button>
        <button type='button'>Undo</button>
      </div>
    </div>
  );
};

export default TodoButtons;
