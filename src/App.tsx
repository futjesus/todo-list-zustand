import { FC } from 'react';
import { Dashboard } from './layouts/dashboard/Dashboard';
import { useThemeStore } from './stores';

import { GlobalStyle } from './styles';

export const App: FC = () => {
  const themeConfig = useThemeStore((state) => state);

  return (
    <>
      <Dashboard />
      <GlobalStyle {...themeConfig} />
      {/* <Footer /> */}
    </>
  );
};
