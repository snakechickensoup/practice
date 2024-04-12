import { action, computed } from "mobx";
import todos from "../../../todo.json";
import { Todo } from "@/types";
import { useLocalObservable } from "mobx-react-lite";

export const useTodoStore = () => {
	const store = useLocalObservable(() => ({
		todos: todos,
		addTodo: action((todo: Todo) => store.todos.push(todo)),
		delTodo: action((todoId: Todo["id"]) => {
			const index = store.todos.findIndex((todo) => todo.id === todoId);
			if (index > -1) store.todos.splice(index, 1);
		}),
		editTodo: action((todoId: Todo["id"], task: Todo["task"]) => {
			const index = store.todos.findIndex((todo) => todo.id === todoId);
			store.todos[index].task = task;
		}),
		checkTodo: action((todoId: Todo["id"]) => {
			const index = store.todos.findIndex((todo) => todo.id === todoId);
			store.todos[index].completed = !store.todos[index].completed;
		}),
		get count() {
			return computed(() => store.todos.length).get();
		},
	}));

	return store;
};
