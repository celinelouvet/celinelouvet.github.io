import { Card, Center, For, Grid, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '@/components/core';

import { CloseButton as CloseButtonComponent } from './CloseButton';

const meta = {
  title: 'Core/Override',
  component: CloseButtonComponent,
} satisfies Meta<typeof CloseButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
type Size = (typeof sizes)[number];

export const CloseButton: Story = {
  render: () => {
    return (
      <Stack gap="4">
        <Card.Root>
          <Card.Header>
            <H3Heading>Default</H3Heading>
          </Card.Header>
          <Card.Body>
            <Center>
              <CloseButtonComponent />
            </Center>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <H3Heading>Sizes</H3Heading>
          </Card.Header>
          <Card.Body>
            <Grid
              templateColumns="5em 10em"
              templateRows="1fr"
              gap={4}
              alignItems="center"
            >
              <For each={sizes}>
                {(size: Size) => (
                  <>
                    <Text>{size}</Text>
                    <Center>
                      <CloseButtonComponent size={size}></CloseButtonComponent>
                    </Center>
                  </>
                )}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
