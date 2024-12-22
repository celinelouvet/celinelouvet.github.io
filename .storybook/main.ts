import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "storybook-dark-mode",
  ],

  framework: "@storybook/nextjs",
  staticDirs: ["../public"],

  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
};

export default config;
