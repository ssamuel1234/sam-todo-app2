import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import type { Todo } from './types';
import type { TodoStatus } from './types';


export const mockTodo: Todo = {
  id: '1',
  name: 'Test Todo',
  dueDate: '2025-09-14',
  description: 'Test description',
  labels: ['work'],
  status: 'NotStarted',
};

const status:TodoStatus  = 'Done'; 

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

test('P8S20: toggles todo completion', async () => {
  window.localStorage.setItem('todos', JSON.stringify([mockTodo]));
  render(<App />);

  // Select the correct checkbox
  const checkbox = screen.getByRole('checkbox', { name: /toggle complete/i });
  await userEvent.click(checkbox);

  const updated = JSON.parse(window.localStorage.getItem('todos') || '[]')[0];

  // Check that the status changed
  expect(updated.status).not.toBe(mockTodo.status);
});
