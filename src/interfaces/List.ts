const enum TaskStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  FINISHED = 'FINISHED',
}

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export { type Task, TaskStatus };
