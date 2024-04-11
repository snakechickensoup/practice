"use client";
import { useTodoStore } from "@/zustand/store";
import React from "react";
import TodoItem from "./item";

const TodoList = () => {
	const todos = useTodoStore((state) => state.todos);

	return (
		<article className="flex flex-col items-center pt-2 bg-yellow-400 w-1/3 border border-black rounded h-1/2">
			<h1 className="text-2xl font-bold">Todo List</h1>
			<ul className="p-4  flex flex-col gap-4 w-full overflow-auto">
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</article>
	);
};

export default TodoList;
