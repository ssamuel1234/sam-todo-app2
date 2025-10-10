import { FC } from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid'; // Run `npm install uuid @types/uuid` first



const App: FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const handleToggleComplete = (id: string) => {
    const updated = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === 'Done' ? 'NotStarted' : 'Done',
          }
        : todo
    );

    setTodos(updated); // ✅ updates state and localStorage via the hook
  };
  return (
    <div>
      <section>
        <h2>Create Todo</h2>
        {/* Placeholder for form */}
      </section>
      <section>
        <h2>Filters</h2>
        {/* Placeholder for filters */}
      </section>
      <section>
        <h2>Todo List</h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onEdit={(id) => {}}
            onDelete={(id) => {}}
            onSelect={(id) => {}}
            selected={false}
          />
        ))}
      </section>
    </div>
  );
};

export default App;