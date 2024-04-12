import { Todo } from "@/types";
import React from "react";

type Props = {
	delTodo: (id: Todo["id"]) => void;
	checkTodo: (id: Todo["id"]) => void;
};

const TodoItem = (props: Props & Todo) => {
	const { id, task, completed, checkTodo, delTodo } = props;
	return (
		<li className="flex ">
			<p>{task}</p>
			<div className="flex">
				<button type="button" className="text-xs" onClick={() => delTodo(id)}>
					삭제
				</button>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => checkTodo(id)}
				/>
			</div>
		</li>
	);
};

export default TodoItem;
