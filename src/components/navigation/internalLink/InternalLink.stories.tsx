import { type Meta, type StoryObj } from '@storybook/react';

import { InternalLink as InternalLinkComponent } from './InternalLink';

const meta = {
  title: 'Theme/Navigation',
  component: InternalLinkComponent,
} satisfies Meta<typeof InternalLinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InternalLink: Story = {
  render: () => (
    <InternalLinkComponent href="/blog">Blog</InternalLinkComponent>
  ),
};
