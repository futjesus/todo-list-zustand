import { create } from 'zustand';

import { Task, TaskStatus } from '../interfaces';

interface TodoListState {
  tasks: Record<Task['id'], Task>;

  getTaskByStatus: (status: TaskStatus) => Task[];
}

export const useTodoListStore = create<TodoListState>()((set, get) => ({
  tasks: {
    '1': {
      id: '1',
      status: TaskStatus.TODO,
      title: 'Test 1',
    },
    '3': {
      id: '3',
      status: TaskStatus.TODO,
      title: 'Test 3',
    },
    '5': {
      id: '5',
      status: TaskStatus.TODO,
      title: 'Test 5',
    },
    '4': {
      id: '4',
      status: TaskStatus.DOING,
      title: 'Test 4',
    },
  },
  getTaskByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;

    return Object.values(tasks).filter((task) => task.status === status);
  },
}));
