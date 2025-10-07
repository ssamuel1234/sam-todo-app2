import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo, TodoStatus } from '../types';
import '@testing-library/jest-dom';

const mockTodo: Todo = {
    id: '1',
    name: 'Test Todo',
    dueDate: '2025-09-14',
    description: 'Test description',
    labels: ['work', 'personal'],
    status: 'NotStarted',
};

test('renders todo details', () => {
    render(
        <TodoItem
            todo={mockTodo}
            onToggleComplete={() => { }}
            onEdit={() => { }}
            onDelete={() => { }}
            onSelect={() => { }}
            selected={false} 
        />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Due: 2025-09-14')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByText('personal')).toBeInTheDocument();
    expect(screen.getByText('Not Started')).toBeInTheDocument();
});