"use client";

import TodoList from "@/components/list";
import { RecoilRoot } from "recoil";

export default function Home() {
	return (
		<RecoilRoot>
			<TodoList />
		</RecoilRoot>
	);
}
