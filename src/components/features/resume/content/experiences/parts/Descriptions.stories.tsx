import { type Meta, type StoryObj } from '@storybook/react';

import { Descriptions as DescriptionsComponent } from './Descriptions';
import { descriptions } from '../fixtures';

const meta = {
  title: 'Resume/Content/Experience/Parts/Descriptions',
  component: DescriptionsComponent,
  args: {
    descriptions,
  },
} satisfies Meta<typeof DescriptionsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Descriptions: Story = {};
