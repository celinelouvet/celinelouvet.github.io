import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ColorModeProvider } from '@/components/ui';

import { LanguageMenuInner as LanguageMenuComponent } from './LanguageMenu';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: LanguageMenuComponent,
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
} satisfies Meta<typeof LanguageMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageMenu: Story = {};
