import React, { useState } from 'react';
import { ProcessType, TodoItem } from './types';

type TodosContextType = {
  items: TodoItem[];
  addTodo: (value: string) => void;
  delTodo: (id: number) => void;
  editTodo: (id: number, value: string) => void;
  handleUndo: () => void;
  handleRedo: () => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  delTodo: () => {},
  editTodo: () => {},
  handleUndo: () => {},
  handleRedo: () => {},
});

const dummyItems = [
  { id: 1, title: '안녕,.,...' },
  { id: 2, title: 'hello' },
];

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>(dummyItems);
  const [process, setProcess] = useState<ProcessType>({
    step: [],
    index: 0,
  });

  const handleUndo = () => {
    if (process.index > 0) {
      const lastStep = process.step[process.index - 1];
      if (lastStep.process === 'add') {
        delTodo(lastStep.item.id);
      }
      if (lastStep.process === 'del') {
        addTodo(lastStep.item);
      }
      if (lastStep.process === 'edit') {
        editTodo(lastStep.item.id, lastStep.item.title);
      }
      setProcess((prev) => ({ ...prev, index: prev.index - 1 }));
    }
    return;
  };

  const handleRedo = () => {
    if (process.index < process.step.length) {
      const prevStep = process.step[process.index];

      if (prevStep.process === 'add') {
        addTodo(prevStep.item);
      }
      if (prevStep.process === 'del') {
        delTodo(prevStep.item.id);
      }
      if (prevStep.process === 'edit') {
        editTodo(prevStep.item.id, prevStep.value as string);
      }
      setProcess((prev) => ({ ...prev, index: prev.index + 1 }));
    }
    return;
  };

  const addTodo = (newTodo: TodoItem) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const delTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, value: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) return { ...todo, title: value };
        else return todo;
      })
    );
  };

  const handleAddTodo = (value: string, id?: number) => {
    const newTodo = { id: id || Date.now(), title: value };
    addTodo(newTodo);
    setProcess((prev) => ({
      step: [
        ...prev.step.slice(0, prev.index),
        { process: 'add', item: newTodo },
      ],
      index: prev.index + 1,
    }));
  };

  const handleDelTodo = (id: number) => {
    const todo = todos.find((e) => e.id === id);
    delTodo(id);
    setProcess((prev) => ({
      step: [
        ...prev.step.slice(0, prev.index),
        {
          process: 'del',
          item: { id, title: todo!.title },
        },
      ],
      index: prev.index + 1,
    }));
  };

  const handleEditTodo = (id: number, value: string) => {
    const todo = todos.find((e) => e.id === id);
    editTodo(id, value);
    setProcess((prev) => ({
      step: [
        ...prev.step.slice(0, prev.index),
        {
          process: 'edit',
          item: { id, title: todo!.title },
          value,
        },
      ],
      index: prev.index + 1,
    }));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: handleAddTodo,
    editTodo: handleEditTodo,
    delTodo: handleDelTodo,
    handleUndo: handleUndo,
    handleRedo: handleRedo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
