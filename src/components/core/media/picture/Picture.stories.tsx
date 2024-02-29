import { type Meta, type StoryObj } from '@storybook/react';

import { Picture as PictureComponent } from '@/components/core';

const meta = {
  title: 'Core/Media',
  component: PictureComponent,
} satisfies Meta<typeof PictureComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Picture: Story = {};
