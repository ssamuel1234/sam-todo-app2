import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm.tsx';

test('P9S23: renders form fields in add mode', () => {
  render(<TodoForm onSubmit={() => {}} onCancel={() => {}} editingTodo={null} />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/labels/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
  expect(screen.getByText('Add Todo')).toBeInTheDocument();
  expect(screen.getByText('Reset')).toBeInTheDocument();
});