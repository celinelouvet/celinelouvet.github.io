import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ColorModeProvider } from '@/components/ui';

import { ColorModeMenuInner as ColorModeMenuComponent } from './ColorModeMenu';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: ColorModeMenuComponent,
  args: {
    log: fn(),
  },
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <Story />
      </ColorModeProvider>
    ),
  ],
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
} satisfies Meta<typeof ColorModeMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorModeMenu: Story = {};
