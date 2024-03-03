import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading, Picture as PictureComponent } from '@/components/core';

const meta = {
  title: 'Core/Media',
  component: PictureComponent,
} satisfies Meta<typeof PictureComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['md', 'lg'];

export const Picture: Story = {
  render: () => (
    <>
      <Grid templateColumns="70px 1fr" columnGap="8" alignItems={'center'}>
        <GridItem colSpan={2}>
          <H2Heading>Sizes</H2Heading>
        </GridItem>
        {sizes.map((size) => (
          <>
            <GridItem>
              <Text fontWeight={700}>{size}</Text>
            </GridItem>
            <GridItem>
              <PictureComponent size={size} />
            </GridItem>
          </>
        ))}
      </Grid>
    </>
  ),
};
