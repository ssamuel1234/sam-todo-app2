import { render, screen } from '@testing-library/react';
import App, { mockTodo } from './App';

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