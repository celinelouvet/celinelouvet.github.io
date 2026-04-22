import { Card, For, Stack, Tag as TagComponent, Wrap } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { HiCheck } from 'react-icons/hi';

import { H3Heading } from 'src/components/core';

const meta = {
  title: 'Core/Override',
  component: TagComponent.Root,
} satisfies Meta<typeof TagComponent.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
type Size = (typeof sizes)[number];

const variants = ['subtle', 'solid', 'outline', 'surface'] as const;
type Variant = (typeof variants)[number];

type ItemProps = { label: string; size?: Size; variant?: Variant };

export const Tag: Story = {
  render: () => {
    const Item = ({ label, size, variant }: ItemProps) => (
      <TagComponent.Root size={size} variant={variant}>
        <TagComponent.Label>{label}</TagComponent.Label>
        <TagComponent.EndElement>
          <HiCheck />
        </TagComponent.EndElement>
      </TagComponent.Root>
    );

    return (
      <Stack gap="8">
        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Variants</H3Heading>
          </Card.Header>
          <Card.Body>
            <Wrap columnGap="8" rowGap="4">
              <For each={variants}>
                {(variant: Variant) => (
                  <Item key={variant} label={variant} variant={variant} />
                )}
              </For>
            </Wrap>
          </Card.Body>
        </Card.Root>

        <Card.Root variant="outline">
          <Card.Header>
            <H3Heading>Sizes</H3Heading>
          </Card.Header>
          <Card.Body>
            <Wrap columnGap="8" rowGap="4">
              <For each={sizes}>
                {(size: Size) => <Item key={size} label={size} size={size} />}
              </For>
            </Wrap>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
