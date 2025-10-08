/**
 * Main App component for the Todo SPA.
 */
import { FC } from 'react';
import TodoItem from './components/TodoItem';
import { TodoStatus, Todo } from './types';

const mockTodo: Todo = {
  id: '1',
  name: 'Test Todo',
  dueDate: '2025-09-14',
  description: 'Test description',
  labels: ['work'],
  status: 'NotStarted',
};

const App: FC = () => {
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
        <TodoItem
          todo={mockTodo}
          onToggleComplete={(id) => console.log('Toggle', id)}
          onEdit={(id) => console.log('Edit', id)}
          onDelete={(id) => console.log('Delete', id)}
          onSelect={(id) => console.log('Select', id)}
          selected={false}
        />
      </section>
    </div>
  );
};

//This is the corrected form of P4S11
export default App;