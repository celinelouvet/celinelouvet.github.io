import { Box, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import * as React from 'react';

import { type Tile, Tiles as TilesComponent } from './Tiles';

const meta = {
  title: 'Talks/Tiles',
  component: TilesComponent,
  args: {
    data: [],
  },
} satisfies Meta<typeof TilesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTiles: Story = {
  render: () => {
    const Item: React.FC<{ title: string; data: Tile[] }> = ({
      title,
      data,
    }) => (
      <Box
        width="800px"
        height="450px"
        border="1px solid"
        borderColor="brand.500"
      >
        <Text fontWeight="700">{title}</Text>
        <TilesComponent data={data} />
      </Box>
    );

    const text1 = 'Some very long text 1';
    const text2 = 'Some very long text 2';
    const text3 = 'Some very long text 3';
    const text4 = 'Some very long text 4';
    return (
      <Stack gap="brand.200">
        <Item
          title="3 tiles"
          data={[{ text: text1 }, { text: text2 }, { text: text3 }]}
        />
        <Item
          title="4 tiles"
          data={[
            { text: text1 },
            { text: text2 },
            { text: text3 },
            { text: text4 },
          ]}
        />
        <Item
          title="3 tiles with title"
          data={[
            { text: text1, title: 'Title 1' },
            { text: text2, title: 'Title 2' },
            { text: text3, title: 'Title 3' },
          ]}
        />
        <Item
          title="4 tiles with title"
          data={[
            { text: text1, title: 'Title 1' },
            { text: text2, title: 'Title 2' },
            { text: text3, title: 'Title 3' },
            { text: text4, title: 'Title 4' },
          ]}
        />
        <Item
          title="4 tiles with highlighted"
          data={[
            { text: text1 },
            { text: text2 },
            { text: text3, highlighted: true },
            { text: text4 },
          ]}
        />
        <Item
          title="4 tiles with highlighted"
          data={[
            { text: text1 },
            { text: text2, highlighted: true },
            { text: text3 },
            { text: text4 },
          ]}
        />
        <Item
          title="4 tiles with not shown"
          data={[
            { text: text1 },
            { text: text2, shown: false },
            { text: text3, shown: false },
            { text: text4, shown: false },
          ]}
        />
        <Item
          title="4 tiles with on smaller"
          data={[
            { text: text1 },
            { text: text2 },
            { text: text3 },
            { text: text4, style: { width: '10%' } },
          ]}
        />
      </Stack>
    );
  },
};
