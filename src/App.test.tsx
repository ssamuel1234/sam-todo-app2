import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Todo, TodoStatus } from './types'; // Remove 'type' from import

export const mockTodo: Todo = {
  id: '1',
  name: 'Test Todo',
  dueDate: '2025-09-14',
  description: 'Test description',
  labels: ['work'],
  status: 'NotStarted',
};

const status: TodoStatus = 'Done'; // Unused, consider removing

beforeEach(() => {
  window.localStorage.clear(); // Clear localStorage for clean state
});

test('renders app structure', () => {
  render(<App />);
  expect(screen.getByText('Create Todo')).toBeInTheDocument();
  expect(screen.getByText('Filters')).toBeInTheDocument();
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('P6S16: renders todo list from localStorage', () => {
  window.localStorage.setItem('todos', JSON.stringify([mockTodo]));
  render(<App />);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

// Step 20: Test Toggling Todo Completion in App
test('P8S20: toggles todo completion', async () => {
  window.localStorage.setItem('todos', JSON.stringify([mockTodo]));
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: /toggle complete/i });
  await userEvent.click(checkbox);

  const updated = JSON.parse(window.localStorage.getItem('todos') || '[]')[0];
  expect(updated.status).not.toBe(mockTodo.status);
});

// Step 21: Test Deleting a Todo in App
window.confirm = jest.fn(() => true); // Mock confirm

test('P8S21: deletes a todo with confirmation', async () => {
  window.localStorage.setItem('todos', JSON.stringify([mockTodo]));
  render(<App />);

  await userEvent.click(screen.getByLabelText('Delete'));
  expect(JSON.parse(window.localStorage.getItem('todos') || '[]')).toEqual([]); // Fixed typo
});

// Step 22: Test Multi-Select Bulk Actions in App
test('P8S22: bulk complete and delete', async () => {
  window.confirm = jest.fn(() => true); // Mock confirm
  window.localStorage.setItem('todos', JSON.stringify([mockTodo, { ...mockTodo, id: '2' }]));
  render(<App />);

  await userEvent.click(screen.getAllByRole('checkbox')[0]); // Adjust if needed
  await userEvent.click(screen.getByText('Complete Selected'));
  let updated = JSON.parse(window.localStorage.getItem('todos') || '[]');
  expect(updated[0].status).toBe(TodoStatus.Completed);

  await userEvent.click(screen.getAllByRole('checkbox')[0]); // Reselect
  await userEvent.click(screen.getByText('Delete Selected'));
  updated = JSON.parse(window.localStorage.getItem('todos') || '[]');
  expect(updated.length).toBe(1);
});