import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/core';
import { ColorModeProvider } from '@/components/ui';
import resume from '@/data/data.fr';

import { Home as HomeComponent } from './Home';

const meta = {
  title: 'Features',
  component: HomeComponent,
  decorators: [
    (Story) => (
      <ColorModeProvider attribute="class">
        <PageContainer>
          <Story />
        </PageContainer>
      </ColorModeProvider>
    ),
  ],
  args: {
    resume,
  },
} satisfies Meta<typeof HomeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: ({ resume }) => {
    return <HomeComponent resume={resume} />;
  },
};
