import { type Meta, type StoryObj } from '@storybook/react';

import { LanguageMenu as LanguageMenuComponent } from './LanguageMenu';

const meta = {
  title: 'Features/Header',
  component: LanguageMenuComponent,
} satisfies Meta<typeof LanguageMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageMenu: Story = {};
