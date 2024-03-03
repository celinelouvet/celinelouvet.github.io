import { Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

const meta = {
  title: 'Core/Typography',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Texts: Story = {
  render: () => (
    <Stack spacing="5">
      <Text>Basic</Text>
      <Text as="b">Bold</Text>
      <Text as="i">Italic</Text>
      <Text as="u">Underline</Text>
      <Text as="abbr">I18N </Text>
      <Text as="cite">Citation</Text>
      <Text as="del">Deleted</Text>
      <Text as="em">Emphasis</Text>
      <Text as="ins">Inserted</Text>
      <Text as="kbd">Ctrl + C</Text>
      <Text as="mark">Highlighted</Text>
      <Text as="s">Strikethrough</Text>
      <Text as="samp">Sample</Text>
      <Text as="sub">sub</Text>
      <Text as="sup">sup</Text>
    </Stack>
  ),
};
