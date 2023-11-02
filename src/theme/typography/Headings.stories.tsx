import { Heading, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/Typography',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <Stack spacing={5}>
      <Heading as="h1">H1 - Lorem ipsum dolor sit amet</Heading>
      <Heading as="h2">H2 - Lorem ipsum dolor sit amet</Heading>
      <Heading as="h3">H3 - Lorem ipsum dolor sit amet</Heading>
      <Heading as="h4">H4 - Lorem ipsum dolor sit amet</Heading>
      <Heading as="h5">H5 - Lorem ipsum dolor sit amet</Heading>
    </Stack>
  ),
};
