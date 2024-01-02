import { type Meta, type StoryObj } from '@storybook/react';

import { BlogBreadcrumb as BlogBreadcrumbComponent } from './BlogBreadcrumb';

const meta = {
  title: 'Theme/Navigation',
  component: BlogBreadcrumbComponent,
  args: {
    title: 'Article title',
  },
} satisfies Meta<typeof BlogBreadcrumbComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlogBreadcrumb: Story = {};
