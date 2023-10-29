import styled from 'styled-components';

import { useThemeStore } from '../../stores';

export const Container = styled.div.attrs(() => {
  const background = useThemeStore((state) => state.computed.background);
  const glass = useThemeStore((state) => state.computed.glass);

  return {
    background,
    glass,
  };
})`
  display: flex;
  justify-content: center;
  gap: 5px;

  height: 60px;
  text-align: center;
  background: ${(props) => props.glass};
  padding: 4px 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);

  button {
    width: 100%;
    max-width: 380px;
    padding: 10px 0;
    background: ${(props) => props.background};
    border: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  button:last-child {
    width: 60px;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
