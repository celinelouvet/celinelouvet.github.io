import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  Stack,
} from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { MoreLessCollapsible as MoreLessCollapsibleComponent } from './MoreLessCollapsible';

const meta = {
  title: 'Core/Disclosure/MoreLessCollapsible',
  component: MoreLessCollapsibleComponent,
} satisfies Meta<typeof MoreLessCollapsibleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVersions: Story = {
  render: () => {
    return (
      <Stack>
        <Card variant="outline">
          <CardHeader>With content</CardHeader>

          <CardBody>
            <MoreLessCollapsibleComponent>
              <List>
                <ListItem>Text 1</ListItem>
                <ListItem>Text 2</ListItem>
              </List>
            </MoreLessCollapsibleComponent>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>Without content</CardHeader>

          <CardBody>
            <MoreLessCollapsibleComponent>{null}</MoreLessCollapsibleComponent>
          </CardBody>
        </Card>

        <Card variant="outline">
          <CardHeader>With content but not shown</CardHeader>

          <CardBody>
            <MoreLessCollapsibleComponent shown={false}>
              <List>
                <ListItem>Text 1</ListItem>
                <ListItem>Text 2</ListItem>
              </List>
            </MoreLessCollapsibleComponent>
          </CardBody>
        </Card>
      </Stack>
    );
  },
};

export const Playground: Story = {
  args: {
    children: (
      <List>
        <ListItem>Text 1</ListItem>
        <ListItem>Text 2</ListItem>
      </List>
    ),
    shown: true,
  },
};
