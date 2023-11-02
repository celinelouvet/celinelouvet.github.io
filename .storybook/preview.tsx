import * as React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { StoryFn, type Parameters, type Preview } from '@storybook/react';

import theme from '../src/theme';

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Story />
  </ChakraProvider>
);
const decorators = [WithStoryThemeProvider];

const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  chakra: {
    theme,
  },
};

const preview: Preview = { parameters, decorators };

export default preview;
