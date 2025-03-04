import {
  Button as ButtonComponent,
  Card,
  Center,
  For,
  Grid,
  Stack,
} from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H3Heading } from '@/components/core';

const meta = {
  title: 'Core/Override',
  component: ButtonComponent,
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = [
  'solid',
  'subtle',
  'surface',
  'outline',
  'ghost',
  'plain',
] as const;

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const Button: Story = {
  render: () => {
    return (
      <Stack gap="4">
        <Card.Root>
          <Card.Header>
            <H3Heading>Default</H3Heading>
          </Card.Header>
          <Card.Body>
            <Center>
              <ButtonComponent>Default</ButtonComponent>
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
                    <ButtonComponent variant={variant}>
                      {variant}
                    </ButtonComponent>
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
                    <ButtonComponent key={size} size={size} variant="solid">
                      {size}
                    </ButtonComponent>
                  </Center>
                )}
              </For>
            </Grid>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
