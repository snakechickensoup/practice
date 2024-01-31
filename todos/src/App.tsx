import TodosContextProvider from './store';
import TodoList from './components/TodoList';
import TodoButtons from './components/TodoButtons';
import './styles.css';

function App() {
  return (
    <TodosContextProvider>
      <TodoList />
      <TodoButtons />
    </TodosContextProvider>
  );
}

export default App;
