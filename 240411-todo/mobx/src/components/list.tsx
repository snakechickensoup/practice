"use client";
import React from "react";
import TodoItem from "./item";
import { observer } from "mobx-react";
import { useTodoStore } from "@/mobx/store";

const TodoList = observer(() => {
	const { count, todos, delTodo, checkTodo } = useTodoStore();
	return (
		<>
			<b>{count}</b>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						{...todo}
						delTodo={delTodo}
						checkTask={checkTodo}
					/>
				))}
			</ul>
		</>
	);
});

export default TodoList;
