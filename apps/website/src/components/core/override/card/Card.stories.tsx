import { Card as CardComponent, For, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading } from '@/components/core';

const meta = {
  title: 'Core/Override',
  component: CardComponent.Root,
} satisfies Meta<typeof CardComponent.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['outline', 'elevated', 'subtle'] as const;
type Variant = (typeof variants)[number];

type ItemProps = {
  label: string;
  variant?: Variant;
};

export const Card: Story = {
  render: () => {
    const Item = ({ label, variant }: ItemProps) => (
      <>
        <H2Heading>{label}</H2Heading>

        <CardComponent.Root variant={variant}>
          <CardComponent.Header>Header</CardComponent.Header>
          <CardComponent.Body>Body</CardComponent.Body>
          <CardComponent.Footer>Footer</CardComponent.Footer>
        </CardComponent.Root>
      </>
    );
    return (
      <Stack gap="4">
        <Item label="Default" />

        <For each={variants}>
          {(key: Variant) => <Item key={key} label={key} variant={key} />}
        </For>
      </Stack>
    );
  },
};
