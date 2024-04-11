import { create } from "zustand";
import todos from "../../../todo.json";
import { Todo } from "@/types";

interface TodoState {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	delTodo: (todoId: Todo["id"]) => void;
	editTask: (id: Todo["id"], task: string) => void;
	checkTask: (id: Todo["id"]) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
	todos: todos,
	addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
	delTodo: (todoId) =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== todoId),
		})),
	editTask: (id, task) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, task } : todo
			),
		})),
	checkTask: (id) =>
		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		})),
}));
