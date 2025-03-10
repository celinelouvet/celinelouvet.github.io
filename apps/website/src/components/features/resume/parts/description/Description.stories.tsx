import { type Meta, type StoryObj } from '@storybook/react';

import resume from '@/data/data.fr';

import { Description as DescriptionComponent } from './Description';

const meta = {
  title: 'Features/Resume/Parts',
  component: DescriptionComponent,
} satisfies Meta<typeof DescriptionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: {
    descriptions: resume.descriptions,
  },
};
