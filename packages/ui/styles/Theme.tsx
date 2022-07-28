import { ThemeProvider } from 'styled-components';
import { theme } from './theme.config';
import { GlobalStyles } from './theme.styled';

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
