import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import {
  Decorator,
  type Parameters,
  type Preview,
  StoryFn,
} from '@storybook/react';

import { customSystem } from '../src/theme';

import '../src/lib/dayjs/config';
import '../src/lib/i18n/config';

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider value={customSystem}>
    <Story />
  </ChakraProvider>
);
const decorators: Decorator[] = [
  withThemeByClassName({
    defaultTheme: 'light',
    themes: { light: '', dark: 'dark' },
  }),
  WithStoryThemeProvider,
];

const parameters: Parameters = {
  chakra: {
    system: customSystem,
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

const preview: Preview = { parameters, decorators };

export default preview;
