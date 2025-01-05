import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    'storybook-dark-mode',
    'storybook-addon-react-router-v6',
  ],

  framework: '@storybook/react-vite', // 👈 Add this
  staticDirs: ['../public'],

  refs: {
    '@chakra-ui/react': { disable: true },
  },
};

export default config;
