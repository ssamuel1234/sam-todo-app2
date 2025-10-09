import { FC } from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid'; // Run `npm install uuid @types/uuid` first

export const mockTodo: Todo = {
  id: '1',
  name: 'Test Todo',
  dueDate: '2025-09-14',
  description: 'Test description',
  labels: ['work'],
  status: 'NotStarted',
};

const App: FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

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
            onToggleComplete={(id) => {} /* placeholder */}
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