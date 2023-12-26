import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeMenu } from './ColorModeMenu';

const meta = {
  title: 'Header/ColorModeMenu',
  component: ColorModeMenu,
} satisfies Meta<typeof ColorModeMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
