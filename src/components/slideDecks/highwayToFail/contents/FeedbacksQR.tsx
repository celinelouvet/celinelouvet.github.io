import { Center, Stack, Text } from '@chakra-ui/react';

import {
  H1Heading,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';
import { ColorMode } from '@/components/core/slide/slideContent/types';

import { QrToFeedbacks } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.content2Columns}
    colormode={ColorMode.dark}
    column1={
      <Center width="100%" height="100%">
        <QrToFeedbacks />
      </Center>
    }
  >
    <Stack
      width="100%"
      height="100%"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <H1Heading textAlign="center" variant="slide" size="lg">
        Feedbacks ?
      </H1Heading>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Si jamais vous souhaitez laisser un feedback, voici le QR code qui va vous
      amener sur la page.
    </Text>
    <Text>
      Ah par contre, si c’est pour m’insulter, comme j’ai déjà eu le cas, ce
      n’est pas la peine.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
