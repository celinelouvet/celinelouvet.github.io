import * as React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
  Decorator,
  StoryFn,
  type Parameters,
  type Preview,
} from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider value={defaultSystem}>
    <Story />
  </ChakraProvider>
);
const decorators: Decorator[] = [
  WithStoryThemeProvider,

  withThemeByClassName({
    defaultTheme: "light",
    themes: { light: "", dark: "dark" },
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
