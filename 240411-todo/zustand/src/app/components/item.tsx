import { Todo } from "@/types";
import { useTodoStore } from "@/zustand/store";
import React from "react";

type Props = {
	id: Todo["id"];
	task: Todo["task"];
	completed: Todo["completed"];
};
const TodoItem = (props: Props) => {
	const { id, task, completed } = props;
	const { checkTask, editTask, delTodo } = useTodoStore((state) => state);
	return (
		<li className="border border-black p-2 bg-white rounded flex justify-between">
			<p>{task}</p>
			<section className="flex gap-3 items-center">
				<button type="button" onClick={() => delTodo(id)} className="text-xs">
					삭제
				</button>
				<button
					type="button"
					onClick={() => editTask(id, "수정")}
					className="text-xs">
					수정
				</button>
				<label className="text-xs flex gap-1 ">
					완료
					<input
						type="checkbox"
						checked={completed}
						onChange={() => checkTask(id)}
					/>
				</label>
			</section>
		</li>
	);
};

export default TodoItem;
