interface Props {
  title: string;
  id: number;
}

const TodoItem = (props: Props) => {
  const { title } = props;
  return (
    <li>
      <b>{title}</b>
      <button type='button'>📝</button>
      <button type='button'>🗑️</button>
    </li>
  );
};

export default TodoItem;
