import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { RemoteText as RemoteTextComponent } from './RemoteText';

const meta = {
  title: 'Resume/Content/Experience/Parts/RemoteText',
  component: RemoteTextComponent,
  args: {
    remote: 'NONE',
  },
} satisfies Meta<typeof RemoteTextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RemoteText: Story = {
  render: () => (
    <Grid templateColumns="150px 1fr" columnGap={8}>
      <GridItem>
        <Text fontWeight={700}>NONE</Text>
      </GridItem>
      <GridItem>
        <RemoteTextComponent remote={'NONE'} />
      </GridItem>
      <GridItem>
        <Text fontWeight={700}>HYBRID</Text>
      </GridItem>
      <GridItem>
        <RemoteTextComponent remote={'HYBRID'} />
      </GridItem>
      <GridItem>
        <Text fontWeight={700}>FULLTIME</Text>
      </GridItem>
      <GridItem>
        <RemoteTextComponent remote={'FULLTIME'} />
      </GridItem>
    </Grid>
  ),
};
