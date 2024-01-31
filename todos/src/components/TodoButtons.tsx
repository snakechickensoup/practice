import { useContext } from 'react';
import NewTodo from './NewTodo';
import { TodosContext } from '../store';

const TodoButtons = () => {
  const { handleUndo, handleRedo } = useContext(TodosContext);
  return (
    <div className='todo-buttons'>
      <NewTodo />
      <div>
        <button type='button' onClick={handleUndo}>
          Undo
        </button>
        <button type='button' onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default TodoButtons;
