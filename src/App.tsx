import { FC, useState } from 'react';
import TodoItem from './components/TodoItem';
import { Todo, TodoStatus } from './types'; // Assuming TodoStatus enum is exported here
import useLocalStorage from './hooks/useLocalStorage';

const App: FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleToggleComplete = (id: string) => {
    const updated = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === TodoStatus.Completed ? TodoStatus.NotStarted : TodoStatus.Completed,
          }
        : todo
    );
    setTodos(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this todo?')) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setSelectedIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const handleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleBulkComplete = () => {
    const updated = todos.map((todo) =>
      selectedIds.has(todo.id) ? { ...todo, status: TodoStatus.Completed } : todo
    );
    setTodos(updated);
    setSelectedIds(new Set());
  };

  const handleBulkDelete = () => {
    if (window.confirm('Delete selected todos?')) {
      setTodos((prev) => prev.filter((todo) => !selectedIds.has(todo.id)));
      setSelectedIds(new Set());
    }
  };

  const hasSelections = selectedIds.size > 0;

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
            onDelete={handleDelete} // Wire this for the Step 21 test
            onSelect={handleSelect}
            selected={selectedIds.has(todo.id)}
          />
        ))}
        {hasSelections && (
          <div>
            <button onClick={handleBulkComplete}>Complete Selected</button>
            <button onClick={handleBulkDelete}>Delete Selected</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;