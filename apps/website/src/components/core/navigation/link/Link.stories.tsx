import { Card, For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading, Link as LinkComponent } from '@/components/core';

const meta = {
  title: 'Core/Navigation',
  component: LinkComponent,
  args: { children: 'Google', href: 'http://google.com' },
} satisfies Meta<typeof LinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['sm', 'md'] as const;
type Size = (typeof sizes)[number];

type ItemProps = { label: string; size?: Size };

export const Link: Story = {
  render: ({ children }) => {
    const href = 'http://google.com';
    const to = '/blog';
    const Item = ({ label, size }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="600">{label}</Text>
        </GridItem>
        <GridItem>
          <LinkComponent.External href={href} size={size}>
            {children}
          </LinkComponent.External>
        </GridItem>
        <GridItem>
          <LinkComponent.Internal to={to} size={size}>
            {children}
          </LinkComponent.Internal>
        </GridItem>
        <GridItem>
          <LinkComponent href={href} variant="plain" size={size}>
            {children}
          </LinkComponent>
        </GridItem>
        <GridItem>
          <LinkComponent href={href} variant="underline" size={size}>
            {children}
          </LinkComponent>
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
              templateColumns="70px 150px 150px 150px 150px"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <GridItem></GridItem>
              <GridItem>
                <Text fontWeight="600">External</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Internal</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Plain</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Underline</Text>
              </GridItem>
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
              templateColumns="70px 150px 150px 150px 150px"
              columnGap="8"
              rowGap="4"
              alignItems="baseline"
            >
              <GridItem></GridItem>
              <GridItem>
                <Text fontWeight="600">External</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Internal</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Plain</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="600">Underline</Text>
              </GridItem>
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
