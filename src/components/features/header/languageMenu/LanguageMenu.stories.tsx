import { type Meta, type StoryObj } from '@storybook/react';

import { LanguageMenu } from './LanguageMenu';

const meta = {
  title: 'Header/LanguageMenu',
  component: LanguageMenu,
} satisfies Meta<typeof LanguageMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
