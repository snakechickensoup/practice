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
  return (
    <>
      <TodoList todos={items}></TodoList>
      <TodoButtons />
    </>
  );
}

export default App;
