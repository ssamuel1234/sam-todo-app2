import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { mockTodo } from '../App.test.tsx';
import userEvent from '@testing-library/user-event';

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

test('P7S19: handles multi and bulk actions', async () => {
    const mockBulkComplete = jest.fn();
    const mockBulkDelete = jest.fn();
    render(
        <TodoList
            todos={[mockTodo]}
            onToggleComplete={() => { }}
            onEdit={() => { }}
            onDelete={() => { }}
            onBulkComplete={mockBulkComplete}
            onBulkDelete={mockBulkDelete}
        />
    );
    
    await userEvent.click(screen.getAllByRole('checkbox')[0]);
    await userEvent.click(screen.getByText('Complete Selected'));
    expect(mockBulkComplete).toHaveBeenCalledWith(['1']);

    await userEvent.click(screen.getByText('Delete Selected'));
    expect(mockBulkDelete).toHaveBeenCalledWith(['1']);
});