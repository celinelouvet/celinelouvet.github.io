import * as React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { StoryFn, type Parameters, type Preview } from "@storybook/react";

const WithStoryThemeProvider = (Story: StoryFn) => (
  <ChakraProvider value={defaultSystem}>
    <Story />
  </ChakraProvider>
);
const decorators = [WithStoryThemeProvider];

const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  chakra: {
    defaultSystem,
  },
};

const preview: Preview = { parameters, decorators };

export default preview;
