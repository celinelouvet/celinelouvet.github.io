import { Card as CardComponent, For, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/core';

const meta = {
  title: 'Core/Override',
  component: CardComponent.Root,
} satisfies Meta<typeof CardComponent.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['outline', 'elevated', 'subtle', 'filled'] as const;
type Variant = (typeof variants)[number];

export const Card: Story = {
  render: () => {
    return (
      <Stack gap="4">
        <H2Heading>Default</H2Heading>

        <CardComponent.Root>
          <CardComponent.Header>Header</CardComponent.Header>
          <CardComponent.Body>Body</CardComponent.Body>
          <CardComponent.Footer>Footer</CardComponent.Footer>
        </CardComponent.Root>

        <For each={variants}>
          {(key: Variant) => (
            <Stack gap="4" key={key}>
              <H2Heading>{key}</H2Heading>

              <CardComponent.Root variant={key}>
                <CardComponent.Header>Header</CardComponent.Header>
                <CardComponent.Body>Body</CardComponent.Body>
                <CardComponent.Footer>Footer</CardComponent.Footer>
              </CardComponent.Root>
            </Stack>
          )}
        </For>
      </Stack>
    );
  },
};
