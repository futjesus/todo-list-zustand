import { FC } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

import { Icon } from '../icon';

import { Task } from '../../interfaces';

import { Container, Buttons } from './styles';

interface ItemProps {
  task: Task;
}

export const Item: FC<ItemProps> = ({ task }) => {
  return (
    <Container>
      <Icon name="BsList" size={24} />

      <p>{task.title}</p>

      <Buttons>
        <button onClick={() => {}}>
          <FaRegEdit size={22} />
        </button>
        <button onClick={() => {}}>
          <FaRegTrashAlt size={20} />
        </button>
      </Buttons>
    </Container>
  );
};
