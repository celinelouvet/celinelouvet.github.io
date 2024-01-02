import { type Meta, type StoryObj } from '@storybook/react';

import { ExternalLink as ExternalLinkComponent } from './ExternalLink';

const meta = {
  title: 'Theme/Navigation',
  component: ExternalLinkComponent,
} satisfies Meta<typeof ExternalLinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExternalLink: Story = {
  render: () => (
    <ExternalLinkComponent href="http://google.com">
      Google
    </ExternalLinkComponent>
  ),
};
