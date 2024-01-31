import { useState } from 'react';
import { TodoItem } from './types';
import TodoList from './components/TodoList';
import TodoButtons from './components/TodoButtons';
import './styles.css';

const dummyItems = [
  { id: 1, title: '안녕,.,...' },
  { id: 2, title: 'hello' },
];

function App() {
  const [items, setItems] = useState<TodoItem[]>(dummyItems);

  const addTodo = (value: string) => {
    const newTodo = { id: Date.now(), title: value };
    setItems((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <TodoList todos={items} />
      <TodoButtons addTodo={addTodo} />
    </>
  );
}

export default App;
