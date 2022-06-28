import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles';
import { useLocalStorage } from '../hooks/hooks';
// import Layout from '../components/Layout';
import { GlobalStyles } from '../styles/GlobalStyles.theme';

interface ThemeProps {
  children: JSX.Element;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const isDarkTheme = theme === 'dark';

  return (
    <ThemeProvider theme={isDarkTheme ? themes.darkTheme : themes.lightTheme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
