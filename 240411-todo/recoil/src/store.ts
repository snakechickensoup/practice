import { atom } from "recoil";
import todos from "../../todo.json";
import { Todo } from "./types";

// atom
export const todosState = atom<Todo[]>({
	key: "todosState",
	default: todos,
});
