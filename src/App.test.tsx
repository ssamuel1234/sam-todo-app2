import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app structure with hardcoded todo', () => {
  render(<App />);
  expect(screen.getByText('Create Todo')).toBeInTheDocument();
  expect(screen.getByText('Filters')).toBeInTheDocument();
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});