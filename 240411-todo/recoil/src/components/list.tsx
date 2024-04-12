import { todosState } from "@/store";
import React from "react";
import { useRecoilState } from "recoil";
import TodoItem from "./item";
import { Todo } from "@/types";

const TodoList = () => {
	const [todoList, setTodoList] = useRecoilState(todosState);

	const delTodo = (id: Todo["id"]) => {
		setTodoList((prev) => prev.filter((todo) => todo.id !== id));
	};

	const checkTodo = (id: Todo["id"]) => {
		setTodoList((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};
	return (
		<>
			<b>{todoList.length}</b>
			<ul>
				{todoList.map((todo) => (
					<TodoItem
						key={todo.id}
						{...todo}
						delTodo={delTodo}
						checkTodo={checkTodo}
					/>
				))}
			</ul>
		</>
	);
};

export default TodoList;
