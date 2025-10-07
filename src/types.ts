/**
 * Enum for Todo status values.
 */
/*export enum TodoStatus {
  NotStarted = 'not started',
  InProgress = 'in progress',
  Waiting = 'waiting',
  Completed = 'completed',
}*/

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