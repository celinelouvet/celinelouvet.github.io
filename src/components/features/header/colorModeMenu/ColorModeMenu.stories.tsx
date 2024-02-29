import { type Meta, type StoryObj } from '@storybook/react';

import { ColorModeMenu as ColorModeMenuComponent } from './ColorModeMenu';

const meta = {
  title: 'Features/Header',
  component: ColorModeMenuComponent,
} satisfies Meta<typeof ColorModeMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorModeMenu: Story = {};
