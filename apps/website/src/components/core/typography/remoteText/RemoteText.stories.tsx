import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '../headings';
import { RemoteText } from './RemoteText';

const meta = {
  title: 'Core/Typography',
  component: RemoteText,
  args: {
    remote: 'FULLTIME',
  },
} satisfies Meta<typeof RemoteText>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
type Size = (typeof sizes)[number];

type ItemProps = {
  label: string;
  size?: Size;
};

export const RemoteTexts: Story = {
  args: {
    remote: 'FULLTIME',
  },

  render: () => {
    const Item = ({ label, size }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="600">{label}</Text>
        </GridItem>
        <GridItem>
          <RemoteText size={size} remote="FULLTIME" />
        </GridItem>
        <GridItem>
          <RemoteText size={size} remote="HYBRID" />
        </GridItem>
      </>
    );

    return (
      <Stack gap="8">
        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>RemoteText</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="70px 300px 400px"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <GridItem></GridItem>
              <GridItem>
                <Text fontWeight="600">FULLTIME</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">HYBRID</Text>
              </GridItem>
              <Item label="Default" />
              <For each={sizes}>
                {(size) => <Item label={size} size={size} />}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
