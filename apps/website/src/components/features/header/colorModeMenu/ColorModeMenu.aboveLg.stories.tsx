import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ColorModeMenuInner as ColorModeMenuComponent } from './ColorModeMenu';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: ColorModeMenuComponent,
} satisfies Meta<typeof ColorModeMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorModeMenu: Story = {
  args: {
    log: fn(),
  },

  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
