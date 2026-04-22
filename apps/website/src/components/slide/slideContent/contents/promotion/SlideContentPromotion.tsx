import {
  Box,
  type BoxProps,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  chakra,
} from '@chakra-ui/react';
import * as React from 'react';

import {
  DateFormatter,
  H2Heading,
  H3Heading,
  Picture,
} from 'src/components/core';

import {
  type ContentPromotion,
  SlideContentTypes,
  colorMode,
} from '../../types';
import { SlideContentWith2Columns } from '../content2Columns';
import { promotionIcon } from './icons';

type SlideContentPromotionProps = Omit<BoxProps, 'children'> &
  React.PropsWithChildren<ContentPromotion>;

export const SlideContentPromotion: React.FC<SlideContentPromotionProps> =
  function SlideContentPromotion({
    author,
    title,
    time,
    convention,
    room,
    ...props
  }) {
    const column1 = (
      <Center width="100%" height="100%">
        <Box width="80%" height="70%">
          <Picture size="full" />
        </Box>
      </Center>
    );

    return (
      <SlideContentWith2Columns
        {...props}
        colormode={colorMode.dark}
        type={SlideContentTypes.content2Columns}
        column1={column1}
      >
        <Stack
          height="100%"
          alignItems="stretch"
          justifyContent="center"
          gap="brand.100"
        >
          <Box>
            <Title title={title} />
          </Box>

          <Box textAlign="center" marginBottom="brand.200">
            <H3Heading variant="slide">{author}</H3Heading>
          </Box>

          <Box flexGrow="1">
            <Center width="100%" height="100%">
              <Grid
                templateColumns="1fr 1fr"
                templateRows="1fr 1fr"
                gap="brand.100"
                width="80%"
                height="100%"
              >
                <GridItem>
                  <Day time={time} />
                </GridItem>

                <GridItem>
                  <Convention convention={convention} />
                </GridItem>

                <GridItem>
                  <Time time={time} />
                </GridItem>

                <GridItem>
                  <Room room={room} />
                </GridItem>
              </Grid>
            </Center>
          </Box>
        </Stack>
      </SlideContentWith2Columns>
    );
  };

const Title: React.FC<{ title: string }> = ({ title }) => (
  <Center w="100%" flexDirection="column">
    {title.split('\n').map((line, i) => (
      <H2Heading key={i} textAlign="center" variant="slide" size="md">
        {line}
      </H2Heading>
    ))}
  </Center>
);

const Day: React.FC<{ time?: string }> = ({ time }) => (
  <Flex w="100%" gap="brand.50" alignItems="center">
    <Icon as={promotionIcon('day')} boxSize="brand.125" />
    {time ? (
      <DateFormatter
        type="date"
        dateFormat="d MMMM yyyy"
        when={time}
        variant="slide"
        color="white"
      />
    ) : (
      <chakra.span>Date inconnue</chakra.span>
    )}
  </Flex>
);

const Time: React.FC<{ time?: string }> = ({ time }) => (
  <Flex w="100%" gap="brand.50" alignItems="center">
    <Icon as={promotionIcon('time')} boxSize="brand.125" />
    {time ? (
      <DateFormatter
        type="date"
        dateFormat="h:mm"
        when={time}
        variant="slide"
        color="white"
      />
    ) : (
      <chakra.span>Heure inconnue</chakra.span>
    )}
  </Flex>
);

const Convention: React.FC<{ convention: string }> = ({ convention }) => (
  <Flex w="100%" gap="brand.50" alignItems="center">
    <Icon as={promotionIcon('convention')} boxSize="brand.125" />
    <chakra.span>{convention}</chakra.span>
  </Flex>
);

const Room: React.FC<{ room?: string }> = ({ room }) => (
  <Flex w="100%" gap="brand.50" alignItems="center">
    <Icon as={promotionIcon('room')} boxSize="brand.125" />
    {room ? (
      <chakra.span>{room}</chakra.span>
    ) : (
      <chakra.span>Salle inconnue</chakra.span>
    )}
  </Flex>
);
