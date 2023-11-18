import { type Meta, type StoryObj } from '@storybook/react';

import { DateText } from '@/components/typography';

const meta = {
  title: 'Theme/Typography',
  component: DateText,
  args: {
    when: '2023/07/31',
    dateFormat: 'MMMM D, YYYY',
  },
} satisfies Meta<typeof DateText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateTexts: Story = {};
