import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
];

const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const App = () => {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(300).then(() => [...posts]),
  });

  if (postsQuery.isLoading) {
    console.log('..is loading ');
  }

  if (postsQuery.isSuccess) {
    console.log(postsQuery.data);
  }

  const newQueryMutation = useMutation({
    mutationFn: (title: string) =>
      wait(300).then(() => posts.push({ id: 3, title })),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });

  return (
    <div>
      <h1>Tanstack Query</h1>
      <button
        type='button'
        disabled={newQueryMutation.isLoading}
        onClick={() => newQueryMutation.mutate('new')}>
        add new Post
      </button>
    </div>
  );
};

export default App;
