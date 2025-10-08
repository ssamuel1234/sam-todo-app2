/**
 * Component to display a single Todo item.
 */
import { FC } from 'react';
import { Todo, TodoStatus } from '../types';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onSelect: (id: string) => void;
    selected: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onToggleComplete, onEdit, onDelete, onSelect, selected }) => {
    const isCompleted = todo.status === 'Done';

const formatStatus = (status: TodoStatus): string => {
    switch (status) {
      case 'NotStarted':
        return 'Not Started';
      case 'InProgress':
        return 'In Progress';
      case 'Waiting':
        return 'Waiting';
      case 'Done':
        return 'Done';
      default:
        return status;
    }
  };

return (
    <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={selected} onChange={() => onSelect(todo.id)} />
      <span>{todo.name}</span>
      <span>Due: {todo.dueDate}</span>
      <p>{todo.description}</p>
      <div>
        Labels: {todo.labels.map(label => <span key={label}>{label}</span>)}
      </div>
      <span>{formatStatus(todo.status)}</span>
        <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggleComplete(todo.id)}
            aria-label="Toggle complete"
        />
      <button aria-label="Edit" onClick={() => onEdit(todo.id)}><FaEdit /></button>
    {/*
      <button aria-label="Delete" onClick={() => onDelete(todo.id)}><FaTrash /></button>
      */}
      </div>
  );
  
};

export default TodoItem;