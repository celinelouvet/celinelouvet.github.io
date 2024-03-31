import { Center, Stack } from '@chakra-ui/react';

import {
  H1Heading,
  InternalLink,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';
import { ColorMode } from '@/components/core/slide/slideContent/types';

import { QrToSurvey } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.content2Columns}
    colormode={ColorMode.light}
    column1={
      <Center width="100%" height="100%">
        <QrToSurvey />
      </Center>
    }
  >
    <Stack
      width="100%"
      height="100%"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <H1Heading textAlign="center" variant="slide" size="lg" color="brand.400">
        Sondage
      </H1Heading>

      <InternalLink
        href="/survey"
        textAlign="center"
        variant="slideLight"
        target="_blank"
      >
        https://celine.louvet.me/survey
      </InternalLink>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
