import { Grid, GridItem } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';
import resume from 'src/data/data.fr';

import { Summary as SummaryComponent } from './Summary';

const meta = {
  title: 'Features/Resume/Above LG',
  component: SummaryComponent,

  args: {
    resume,
  },

  decorators: [
    (Story) => (
      <PageContainer marginTop="100px">
        <Grid
          gridTemplateColumns={`${200 * 1.75}px auto`}
          columnGap="6"
          padding="6"
        >
          <Story />
          <GridItem backgroundColor="white">Content</GridItem>
        </Grid>
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof SummaryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
