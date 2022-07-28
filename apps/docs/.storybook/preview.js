import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { theme, GlobalStyles } from 'ui';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

const GlobalStyleAdded = (StoryFunction) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StoryFunction />
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(GlobalStyleAdded);
