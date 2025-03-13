import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LanguageMenuInner as LanguageMenuComponent } from './LanguageMenu';

const meta = {
  title: 'Features/Header/AboveLg/Parts',
  component: LanguageMenuComponent,
} satisfies Meta<typeof LanguageMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageMenu: Story = {
  args: {
    log: fn(),
  },

  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
