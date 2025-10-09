import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { mockTodo } from '../App';

test('P7S17: renders empty state when no todos', () => {
    render(
        <TodoList
            todos={[]}
            onToggleComplete={() => { }}
            onEdit={() => { }}
            onDelete={() => { }}
            onBulkComplete={() => { }}
            onBulkDelete={() => { }}
        />
    );
    expect(screen.getByText('No todos yet')).toBeInTheDocument();
});

test('P7S18: renders list of todos', () => {
    render(
        <TodoList
            todos={[mockTodo]}
            onToggleComplete={() => { }}
            onEdit={() => { }}
            onDelete={() => { }}
            onBulkComplete={() => { }}
            onBulkDelete={() => { }}
        />
    );
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
});