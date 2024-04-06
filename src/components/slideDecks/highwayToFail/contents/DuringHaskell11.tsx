import { Code, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell — Inférence de type"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <Code width="100%" variant="slide">
        <Stack fontFamily="noto mono" gap="0.5em">
          <Text as="span">inc x = x + 1</Text>
        </Stack>
      </Code>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>À faire</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
