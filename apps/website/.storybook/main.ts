import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    'storybook-dark-mode',
  ],

  framework: '@storybook/react-vite',
  staticDirs: ['./public'],

  refs: { '@chakra-ui/react': { disable: true } },
};

export default config;
