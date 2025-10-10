/**
 * Component to display list of todos or empty state.
 */
import { type FC, useState } from 'react';
import TodoItem from './TodoItem';
import type { Todo } from '../types';

interface TodoListProps {
    todos: Todo[];
    onToggleComplete: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onBulkComplete: (selectedIds: string[]) => void;
    onBulkDelete: (selectedIds: string[]) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onToggleComplete, onEdit, onDelete, onBulkComplete, onBulkDelete }) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const handleSelect = (id: string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    if (todos.length === 0) {
        return <p>No todos yet</p>;
    }

    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onSelect={handleSelect}
                    selected={selectedIds.includes(todo.id)}
                />
            ))}
            {selectedIds.length > 0 && (
                <div>
                    <button onClick={() => onBulkComplete(selectedIds)}>Complete Selected</button>
                    <button onClick={() => onBulkDelete(selectedIds)}>Delete Selected</button>
                </div>
            )}
        </div>
    );
};

export default TodoList;