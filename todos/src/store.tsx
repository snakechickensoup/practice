import React, { useState } from 'react';
import { TodoItem } from './types';

type TodosContextType = {
  items: TodoItem[];
  addTodo: (value: string) => void;
  delTodo: (id: number) => void;
  editTodo: (id: number, value: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  delTodo: () => {},
  editTodo: () => {},
});

const dummyItems = [
  { id: 1, title: '안녕,.,...' },
  { id: 2, title: 'hello' },
];

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>(dummyItems);

  const handleAddTodo = (value: string) => {
    const newTodo = { id: Date.now(), title: value };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleEditTodo = (id: number, value: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) return { ...todo, title: value };
        else return todo;
      })
    );
  };

  const handleDelTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: handleAddTodo,
    editTodo: handleEditTodo,
    delTodo: handleDelTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
