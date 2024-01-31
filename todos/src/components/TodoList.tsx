import { TodoItem as TodoType } from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: TodoType[];
}

const TodoList = (props: Props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
