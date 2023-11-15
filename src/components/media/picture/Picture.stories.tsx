import { type Meta, type StoryObj } from '@storybook/react';

import { Picture as PictureComponent } from '@/components/media';

const meta = {
  title: 'Theme/Media',
  component: PictureComponent,
} satisfies Meta<typeof PictureComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Picture: Story = {};
