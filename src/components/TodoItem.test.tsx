import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo, TodoStatus } from '../types';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const mockTodo: Todo = {
    id: '1',
    name: 'Test Todo',
    dueDate: '2025-09-14',
    description: 'Test description',
    labels: ['work', 'personal'],
    status: 'NotStarted',
};
//------------------------------------------------------------------------------
//Step 7: Test Rendering TodoItem Details
test('P3S7: renders todo details', () => {
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

//--------------------------------------------------------------------------
//Step 8: Test TodoItem Completion Checkbox    
test('P3S8: calls onToggleComplete on checkbox click', async () => {
    const mockToggle = jest.fn();
    render(
        <TodoItem
            todo={mockTodo}
            onToggleComplete={mockToggle}
            onEdit={() => { }}
            onDelete={() => { }}
            onSelect={() => { }}
            selected={false}
        />
    );

    const checkbox = screen.getByRole('checkbox',
        {
            name: /Toggle complete/i
        }); 
    await userEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith('1');

});

//--------------------------------------------------------------------------
//Step 9: Test TodoItem Edit and Delete Icons
test('calls onEdit and onDelete on button clicks', async () => {
  const mockEdit = jest.fn();
  const mockDelete = jest.fn();
  render(
    <TodoItem
      todo={mockTodo}
      onToggleComplete={() => {}}
      onEdit={mockEdit}
      onDelete={mockDelete}
      onSelect={() => {}}
      selected={false}
    />
  );

    const editbutton = screen.getByRole('button',
        {
            name: /edit/i
        }); 
    await userEvent.click(screen.getByLabelText('Edit'));
    expect(mockEdit).toHaveBeenCalledWith('1');

    const deletebutton = screen.getByRole('button',
        {
            name: /delete/i
        });
    await userEvent.click(screen.getByLabelText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith('1');
});

//---------------------------------------------------------
//Step 10: Test TodoItem Multi-Select Checkbox
test('P3S10: calls onSelect on multi-select checkbox click', async () => {
  const mockSelect = jest.fn();
  render(
    <TodoItem
      todo={mockTodo}
      onToggleComplete={() => {}}
      onEdit={() => {}}
      onDelete={() => {}}
      onSelect={mockSelect}
      selected={false}
    />
  );

  const selectCheckbox = screen.getAllByRole('checkbox')[0];
  await userEvent.click(selectCheckbox);
  expect(mockSelect).toHaveBeenCalledWith('1');
});