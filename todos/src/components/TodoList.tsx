import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store';

const TodoList = () => {
  const { items } = useContext(TodosContext);
  return (
    <ul className='todo-list'>
      {items.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
