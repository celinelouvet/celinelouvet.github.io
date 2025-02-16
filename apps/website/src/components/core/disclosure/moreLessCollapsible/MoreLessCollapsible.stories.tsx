import { Card, List, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { MoreLessCollapsible as MoreLessCollapsibleComponent } from './MoreLessCollapsible';

const meta = {
  title: 'Core/Disclosure',
  component: MoreLessCollapsibleComponent,
} satisfies Meta<typeof MoreLessCollapsibleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoreLessCollapsible: Story = {
  render: () => {
    return (
      <Stack>
        <Card.Root variant="outline">
          <Card.Header>With content</Card.Header>

          <Card.Body>
            <MoreLessCollapsibleComponent>
              <List.Root>
                <List.Item>Text 1</List.Item>
                <List.Item>Text 2</List.Item>
              </List.Root>
            </MoreLessCollapsibleComponent>
          </Card.Body>
        </Card.Root>
        <Card.Root variant="outline">
          <Card.Header>Without content</Card.Header>

          <Card.Body>
            <MoreLessCollapsibleComponent>{null}</MoreLessCollapsibleComponent>
          </Card.Body>
        </Card.Root>

        <Card.Root variant="outline">
          <Card.Header>With content but not shown</Card.Header>

          <Card.Body>
            <MoreLessCollapsibleComponent shown={false}>
              <List.Root>
                <List.Item>Text 1</List.Item>
                <List.Item>Text 2</List.Item>
              </List.Root>
            </MoreLessCollapsibleComponent>
          </Card.Body>
        </Card.Root>
      </Stack>
    );
  },
};
