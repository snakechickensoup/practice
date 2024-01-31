export type TodoItem = {
  id: number;
  title: string;
};

export type ProcessType = {
  step: { process: 'add' | 'del' | 'edit'; item: TodoItem; value?: string }[];
  index: number;
};
