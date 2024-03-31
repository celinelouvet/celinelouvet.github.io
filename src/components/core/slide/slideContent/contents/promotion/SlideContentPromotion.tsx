import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  StackItem,
  type StackProps,
  Text,
  forwardRef,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { DateText, H2Heading, H3Heading, Picture } from '@/components/core';

import { promotionIcon } from './icons';
import {
  ColorMode,
  type ContentPromotion,
  SlideContentTypes,
} from '../../types';
import { SlideContentWith2Columns } from '../content2Columns';

type SlideContentPromotionProps = Omit<StackProps, 'children'> &
  ContentPromotion;

export const SlideContentPromotion = forwardRef<
  SlideContentPromotionProps,
  'div'
>(({ author, title, time, convention, room, ...props }, ref) => {
  const Column1 = (
    <Center width="100%" height="100%">
      <Box width="80%" height="70%">
        <Picture size="full" />
      </Box>
    </Center>
  );

  return (
    <SlideContentWith2Columns
      {...props}
      column1={Column1}
      colormode={ColorMode.dark}
      ref={ref}
      type={SlideContentTypes.content2Columns}
    >
      <Stack
        height="100%"
        alignItems="stretch"
        justifyContent="center"
        gap="1em"
      >
        <StackItem>
          <Title title={title} />
        </StackItem>

        <StackItem textAlign="center" marginBottom="2em">
          <H3Heading>{author}</H3Heading>
        </StackItem>

        <StackItem flexGrow="1">
          <Center width="100%" height="100%">
            <Grid
              templateColumns="1fr 1fr"
              templateRows="1fr 1fr"
              gap="1em"
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
        </StackItem>
      </Stack>
    </SlideContentWith2Columns>
  );
});

const Title: FC<{ title: string }> = ({ title }) => (
  <Center w="100%" flexDirection="column">
    {title.split('\n').map((line, i) => (
      <H2Heading key={i} textAlign="center" variant="slide" size="md">
        {line}
      </H2Heading>
    ))}
  </Center>
);

const Day: FC<{ time?: string }> = ({ time }) => (
  <Flex w="100%" gap="0.5em" alignItems="center">
    <Icon as={promotionIcon('day')} boxSize="1.25em" />
    {time ? (
      <DateText dateFormat="D MMMM YYYY" when={time} variant="slide" />
    ) : (
      <Text as="span">Date inconnue</Text>
    )}
  </Flex>
);

const Time: FC<{ time?: string }> = ({ time }) => (
  <Flex w="100%" gap="0.5em" alignItems="center">
    <Icon as={promotionIcon('time')} boxSize="1.25em" />
    {time ? (
      <DateText dateFormat="h:mm" when={time} variant="slide" />
    ) : (
      <Text as="span">Heure inconnue</Text>
    )}
  </Flex>
);

const Convention: FC<{ convention: string }> = ({ convention }) => (
  <Flex w="100%" gap="0.5em" alignItems="center">
    <Icon as={promotionIcon('convention')} boxSize="1.25em" />
    <Text as="span">{convention}</Text>
  </Flex>
);

const Room: FC<{ room?: string }> = ({ room }) => (
  <Flex w="100%" gap="0.5em" alignItems="center">
    <Icon as={promotionIcon('room')} boxSize="1.25em" />
    {room ? (
      <Text as="span">{room}</Text>
    ) : (
      <Text as="span">Salle inconnue</Text>
    )}
  </Flex>
);
