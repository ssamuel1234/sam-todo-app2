/**
 * Form component for adding or editing a Todo.
 */
import { FC, useState, FormEvent } from 'react';
import { Todo, TodoStatus } from '../types';

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
  onCancel: () => void;
  editingTodo: Todo | null;
}

const TodoForm: FC<TodoFormProps> = ({ onSubmit, onCancel, editingTodo }) => {
  const isEdit = !!editingTodo;
  const [name, setName] = useState(editingTodo?.name || '');
  const [dueDate, setDueDate] = useState(editingTodo?.dueDate || '');
  const [description, setDescription] = useState(editingTodo?.description || '');
  const [labels, setLabels] = useState(editingTodo?.labels.join(', ') || '');
  const [status, setStatus] = useState<TodoStatus>(editingTodo?.status || TodoStatus.NotStarted);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo: Todo = {
      id: editingTodo?.id || uuidv4(),
      name,
      dueDate,
      description,
      labels: labels.split(',').map(l => l.trim()).filter(l => l),
      status,
    };
    onSubmit(todo);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDueDate('');
    setDescription('');
    setLabels('');
    setStatus(TodoStatus.NotStarted);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Labels (comma-separated):
        <input type="text" value={labels} onChange={e => setLabels(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={e => setStatus(e.target.value as TodoStatus)}>
          {Object.values(TodoStatus).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <button type="submit">{isEdit ? 'Update' : 'Add Todo'}</button>
      <button type="button" onClick={resetForm}>Reset</button>
      {isEdit && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TodoForm;