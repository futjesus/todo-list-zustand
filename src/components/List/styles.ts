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
  flex-direction: column;
  justify-content: space-between;

  height: fit-content;
  min-height: calc(100vh - 80px);
  max-height: fit-content;
  width: calc((100% / 3) - 20px);
  min-width: 270px;
  max-width: 500px;
  background: ${(props) => props.glass};
  border-radius: 15px;

  @media (max-width: 900px) {
    width: calc((100% / 2) - 10px);
  }

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 432px) {
    width: 380px;
  }

  header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-transform: uppercase;

    border-radius: 15px 15px 0 0;
    background: ${(props) => props.background};
  }

  ul {
    height: 100%;
    min-height: calc(100vh - 80px - 64px);

    button {
      background: none;
      border-radius: 0;
    }

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #fff5;
    }
  }

  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${(props) => props.background};
  }
`;
