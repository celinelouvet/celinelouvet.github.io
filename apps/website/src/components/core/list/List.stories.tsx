import { Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { BsBlockquoteLeft, BsGeoAltFill, BsTwitter } from 'react-icons/bs';

import { List as ListComponent } from '@/components/core';

const meta = { title: 'Core', component: ListComponent.Root } satisfies Meta<
  typeof ListComponent.Root
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  render: () => (
    <Stack gap="8">
      <ListComponent.Root variant="plain" gap="4">
        <ListComponent.TextItem
          icon={BsGeoAltFill}
          ariaLabel="Text with icon"
          text="Text with icon"
        />
        <ListComponent.TextItem
          ariaLabel="Text without icon"
          text="Text without icon"
        />
        <ListComponent.LinkItem
          icon={BsTwitter}
          ariaLabel="External link with icon"
          text="External link with icon"
          href="https://twitter.com/username"
        />
        <ListComponent.LinkItem
          ariaLabel="External link without icon"
          text="External link without icon"
          href="https://twitter.com/username"
        />
        <ListComponent.LinkItem
          icon={BsBlockquoteLeft}
          ariaLabel="Internal link with icon"
          text="Internal link with icon"
          to="/resume"
        />
        <ListComponent.LinkItem
          ariaLabel="Internal link without icon"
          text="Internal link without icon"
          to="/resume"
        />
      </ListComponent.Root>

      <ListComponent.Root variant="marker">
        <ListComponent.Item>Text 1</ListComponent.Item>
        <ListComponent.Item>Text 2</ListComponent.Item>
        <ListComponent.Item>Text 3</ListComponent.Item>
        <ListComponent.Item>Text 4</ListComponent.Item>
      </ListComponent.Root>
    </Stack>
  ),
};
