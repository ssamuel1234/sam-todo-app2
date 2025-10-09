import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

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