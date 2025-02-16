import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '@/components/core';

import { ExternalLink as ExternalLinkComponent } from './components/ExternalLink';

const meta = {
  title: 'Core/Navigation',
  component: ExternalLinkComponent,
  args: {
    children: 'Google',
    href: 'http://google.com',
  },
} satisfies Meta<typeof ExternalLinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['sm', 'md'] as const;
type Size = (typeof sizes)[number];

type ItemProps = {
  label: string;
  size?: Size;
};

export const ExternalLink: Story = {
  render: ({ children, href }) => {
    const Item = ({ label, size }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="600">{label}</Text>
        </GridItem>
        <GridItem>
          <ExternalLinkComponent href={href} size={size}>
            {children}
          </ExternalLinkComponent>
        </GridItem>
      </>
    );

    return (
      <Stack gap="8">
        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Args</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="70px 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <Item label="Default" />
            </Grid>
          </Card.Body>
        </Card.Root>

        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Sizes</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="70px 1fr"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <For each={sizes}>
                {(size: Size) => <Item key={size} label={size} size={size} />}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
