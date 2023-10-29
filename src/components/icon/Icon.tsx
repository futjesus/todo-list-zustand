import { FC } from 'react';
import { FaCheck, FaPencilAlt, FaRegClock, FaBandcamp } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';

export type IconType = 'FaRegClock' | 'FaPencilAlt' | 'FaCheck' | 'BsList';

interface Props {
  name: IconType;
  size?: number;
}

export const Icon: FC<Props> = ({ name, size = 20 }) => {
  const icons = {
    FaRegClock: FaRegClock,
    FaPencilAlt: FaPencilAlt,
    FaCheck: FaCheck,
    FaBandcamp: FaBandcamp,
    BsList: BsList,
  };

  const Component = icons[name] ?? icons['FaBandcamp'];

  return <Component size={size} />;
};
