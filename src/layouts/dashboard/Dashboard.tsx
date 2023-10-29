import { FC, useCallback } from 'react';

import { useTodoListStore } from '../../stores';
import { List } from '../../components/list';
import { TaskStatus } from '../../interfaces';

import { Container } from './styles';

export const Dashboard: FC = () => {
  const getTaskByStatus = useTodoListStore((state) => state.getTaskByStatus);

  return (
    <Container>
      <List
        nameColumn="FaRegClock"
        title={TaskStatus.TODO}
        tasks={getTaskByStatus(TaskStatus.TODO)}
      />

      <List
        nameColumn="FaPencilAlt"
        title={TaskStatus.DOING}
        tasks={getTaskByStatus(TaskStatus.DOING)}
      />

      <List
        nameColumn="FaCheck"
        title={TaskStatus.FINISHED}
        tasks={getTaskByStatus(TaskStatus.FINISHED)}
      />
    </Container>
  );
};
