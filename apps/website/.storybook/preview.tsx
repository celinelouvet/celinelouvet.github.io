import * as React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import {
  Decorator,
  type Parameters,
  type Preview,
  StoryFn,
} from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { ColorModeProvider } from '../src/components/ui';
import { customSystem } from '../src/theme';

import '../src/lib/config';

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider value={customSystem}>
    <ColorModeProvider attribute="class">
      <Box padding={4}>
        <Story />
      </Box>
    </ColorModeProvider>
  </ChakraProvider>
);

const WithRouter = (Story: StoryFn) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

const decorators: Decorator[] = [
  withThemeByClassName({
    defaultTheme: 'light',
    themes: { light: 'light', dark: 'dark' },
  }),
  WithStoryThemeProvider,
  WithRouter,
];

const parameters: Parameters = {
  chakra: { system: customSystem },
};

const preview: Preview = { parameters, decorators };

export default preview;
