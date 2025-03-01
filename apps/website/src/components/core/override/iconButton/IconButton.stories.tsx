import {
  Card,
  Center,
  For,
  Grid,
  IconButton as IconButtonComponent,
  Stack,
} from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { BsList } from 'react-icons/bs';

import { H3Heading } from '@/components/core';

const meta = {
  title: 'Core/Override',
  component: IconButtonComponent,
} satisfies Meta<typeof IconButtonComponent>;

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

export const IconButton: Story = {
  render: () => {
    return (
      <Stack gap="4">
        <Card.Root>
          <Card.Header>
            <H3Heading>Default</H3Heading>
          </Card.Header>
          <Card.Body>
            <Center>
              <IconButtonComponent>
                <BsList />
              </IconButtonComponent>
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
                    <IconButtonComponent variant={variant}>
                      <BsList />
                    </IconButtonComponent>
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
                    <IconButtonComponent key={size} size={size} variant="solid">
                      {size}
                    </IconButtonComponent>
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
