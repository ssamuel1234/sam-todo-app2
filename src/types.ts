// src/types.ts
export interface Todo {
  id: string;
  name: string;
  dueDate: string;
  description: string;
  labels: string[];
  status: TodoStatus;
}

export enum TodoStatus {
  NotStarted = 'NotStarted',
  Completed = 'Completed',
}