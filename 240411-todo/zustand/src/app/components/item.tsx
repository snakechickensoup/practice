import { Todo } from "@/types";
import React from "react";

type Props = {
	task: Todo["task"];
	completed: Todo["completed"];
};
const TodoItem = (props: Props) => {
	const { task, completed } = props;
	return (
		<li className="border border-black p-2 bg-white rounded flex justify-between">
			<p>{task}</p>
			<input type="checkbox" checked={completed} />
		</li>
	);
};

export default TodoItem;
