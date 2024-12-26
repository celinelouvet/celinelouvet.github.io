import * as React from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import {
  Decorator,
  type Parameters,
  type Preview,
  StoryFn,
} from '@storybook/react';

import '../src/lib/dayjs/config';
import '../src/lib/i18n/config';

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider value={defaultSystem}>
    <Story />
  </ChakraProvider>
);
const decorators: Decorator[] = [
  WithStoryThemeProvider,

  withThemeByClassName({
    defaultTheme: 'light',
    themes: { light: '', dark: 'dark' },
  }),
];

const parameters: Parameters = {
  chakra: {
    defaultSystem,
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

const preview: Preview = { parameters, decorators };

export default preview;
