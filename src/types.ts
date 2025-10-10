/**
 * Enum for Todo status values.
 */

export type TodoStatus = 'NotStarted' | 'InProgress' | 'Waiting' |'Done';

/**
 * Interface for a Todo item.
 */
export interface Todo {
  id: string;
  name: string;
  dueDate: string;
  description: string;
  labels: string[];
  status: TodoStatus;
}

/**
 * Interface for filters.
 */
export interface Filters {
  status: TodoStatus[] | 'all';
  labels: string[];
  searchText: string;
}