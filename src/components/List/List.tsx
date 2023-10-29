import { FC } from 'react';

import { Task, TaskStatus } from '../../interfaces';
import { Icon, IconType } from '../icon';
import { Item } from '../item';

import { Container } from './styles';

interface Props {
  nameColumn: IconType;
  title: TaskStatus;
  tasks: Task[];
}

export const List: FC<Props> = ({ title, tasks, nameColumn }) => {
  return (
    <Container>
      <header>
        <Icon name={nameColumn} />
        <h1>{title}</h1>
      </header>

      {tasks.map((task) => (
        <Item key={task.id} task={task} />
      ))}
      <footer />
    </Container>
  );
};
