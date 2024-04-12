import { Todo } from "@/types";
import React from "react";

type Props = {
	delTodo: (id: Todo["id"]) => void;
	checkTask: (id: Todo["id"]) => void;
};

const TodoItem = (props: Props & Todo) => {
	const { id, task, completed, delTodo, checkTask } = props;

	return (
		<li className="flex items-center gap-2">
			{task}
			<button className="text-xs" onClick={() => delTodo(id)}>
				삭제
			</button>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => checkTask(id)}></input>
		</li>
	);
};

export default TodoItem;
