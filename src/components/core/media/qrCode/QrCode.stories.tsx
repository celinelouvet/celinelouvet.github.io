import { Grid, GridItem, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading, QrCode as QrCodeComponent } from '@/components/core';

const meta = {
  title: 'Core/Media',
  component: QrCodeComponent,
  args: {
    value: 'https://github.com/rosskhanas/react-qr-code',
  },
} satisfies Meta<typeof QrCodeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['light', 'dark'];

export const QrCode: Story = {
  render: ({ value }) => (
    <>
      <Grid
        templateColumns="70px 1fr"
        templateRows="auto 300px 300px"
        columnGap="8"
        alignItems="center"
      >
        <GridItem colSpan={2}>
          <H2Heading>Variants</H2Heading>
        </GridItem>
        {variants.map((variant) => (
          <>
            <GridItem>
              <Text fontWeight="700">{variant}</Text>
            </GridItem>
            <GridItem width="300px">
              <QrCodeComponent
                value={value}
                variant={variant}
                bgColor={variant === 'light' ? 'black' : 'white'}
                padding="4"
              />
            </GridItem>
          </>
        ))}
      </Grid>
    </>
  ),
};
