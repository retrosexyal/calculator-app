import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@components/header';

import { Global } from '@styles/global';
import { Wrapper } from '@styles/wrapper';
import { whiteTheme, darkTheme, coloredTheme } from '@styles/theme';
import { Routes, Route } from 'react-router-dom';
import { HomeFC, HomeCC } from '@pages/home';
import Settings from '@pages/settings';
import { routes } from '@constants/routes';
import { useSelector } from 'react-redux';

function App() {
  const { theme } = useSelector((state) => state.theme);
  let currentTheme = theme;
  const historyTheme = localStorage.getItem('theme');
  if (historyTheme) {
    currentTheme = historyTheme;
  }

  const themeSelector = () => {
    if (currentTheme === 'Dark theme') {
      return darkTheme;
    }
    if (currentTheme === 'Colored theme') {
      return coloredTheme;
    }
    return whiteTheme;
  };
  return (
    <ThemeProvider theme={themeSelector()}>
      <Global />
      <Wrapper>
        <Header />
        <Routes>
          <Route path={routes.HOME_FC} element={<HomeFC />} />
          <Route path={routes.HOME_CC} element={<HomeCC />} />
          <Route path={routes.SETTINGS} element={<Settings />} />
          <Route path="*" element={<HomeFC />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
