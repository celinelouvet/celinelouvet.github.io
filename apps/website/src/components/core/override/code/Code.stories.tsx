import {
  Card,
  Center,
  Code as CodeComponent,
  For,
  Grid,
  Stack,
} from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from 'src/components/core';

const meta = {
  title: 'Core/Override',
  component: CodeComponent,
} satisfies Meta<typeof CodeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'solid',
  'subtle',
  'surface',
  'outline',
  'slide',
  'inlineSlide',
] as const;

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export const Code: Story = {
  render: () => (
    <Stack gap="4">
      <Card.Root>
        <Card.Header>
          <H3Heading>Default</H3Heading>
        </Card.Header>
        <Card.Body>
          <Center>
            <CodeComponent>Default</CodeComponent>
          </Center>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <H3Heading>Variants</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <For each={variants}>
              {(variant) => (
                <Center key={variant}>
                  <CodeComponent variant={variant}>{variant}</CodeComponent>
                </Center>
              )}
            </For>
          </Grid>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Header>
          <H3Heading>Sizes</H3Heading>
        </Card.Header>
        <Card.Body>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <For each={sizes}>
              {(size) => (
                <Center key={size}>
                  <CodeComponent key={size} size={size}>
                    {size}
                  </CodeComponent>
                </Center>
              )}
            </For>
          </Grid>
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};
