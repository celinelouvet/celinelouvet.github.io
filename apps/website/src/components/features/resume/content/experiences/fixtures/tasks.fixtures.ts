import { type Task } from '@/data';

// Tasks
const subtask1 = { name: 'Sub task 1' } satisfies Task;
const subtask2 = { name: 'Sub task 2' } satisfies Task;
const task1 = {
  name: 'Level 1',
  subtasks: [subtask1, subtask2],
} satisfies Task;
const task2 = {
  name: 'Level 2',
  subtasks: [subtask1, subtask2],
} satisfies Task;

export const allTasks = [task1, task2] satisfies Task[];
