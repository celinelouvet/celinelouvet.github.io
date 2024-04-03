import { Code, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell — Currying"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <Code width="100%" variant="slide">
        <Stack fontFamily="noto mono" gap="0.5em">
          <Text as="span">add :: Int → Int → Int</Text>
          <Text as="span">add :: (Int → Int) → Int</Text>
          <Text as="span">add :: Int → (Int → Int)</Text>
        </Stack>
      </Code>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
