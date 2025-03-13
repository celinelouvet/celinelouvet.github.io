import { For, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { H2Heading, QrCode as QrCodeComponent } from '@/components/core';

const meta = {
  title: 'Core/Media',
  component: QrCodeComponent,
} satisfies Meta<typeof QrCodeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['light', 'dark'] as const;
type Variant = (typeof variants)[number];

type ItemProps = { variant: Variant };

export const QrCode: Story = {
  args: { value: 'https://chakra-ui.com/docs/components/qr-code' },

  render: ({ value }) => {
    const Item = ({ variant }: ItemProps) => (
      <>
        <GridItem>
          <Text fontWeight="700">{variant}</Text>
        </GridItem>

        <GridItem
          width="300px"
          bgColor={variant === 'light' ? 'brand.200' : 'white'}
        >
          <QrCodeComponent value={value} variant={variant} padding="4" />
        </GridItem>
      </>
    );

    return (
      <>
        <Stack gap="4">
          <Grid templateColumns="100px 1fr" gap="8" alignItems="baseline">
            <GridItem colSpan={2}>
              <H2Heading>Variants</H2Heading>
            </GridItem>
            <For each={variants}>
              {(variant: Variant) => <Item key={variant} variant={variant} />}
            </For>
          </Grid>
        </Stack>
      </>
    );
  },
};
