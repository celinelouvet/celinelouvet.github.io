import { type Meta, type StoryObj } from '@storybook/react';

import { Descriptions as DescriptionsComponent } from './Descriptions';
import { descriptions } from '../fixtures';

const meta = {
  title: 'Features/Resume',
  component: DescriptionsComponent,
  args: {
    descriptions,
  },
} satisfies Meta<typeof DescriptionsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExperienceDescriptions: Story = {};
