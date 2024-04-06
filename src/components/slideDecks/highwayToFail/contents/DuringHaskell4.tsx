import { Code, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell - Pattern matching"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <Text>Suite de Fibonacci: 1, 2, 3, 5, 8, 13, etc.</Text>

      <Code width="100%" variant="slide">
        <Stack fontFamily="noto mono" gap="0.5em">
          <Text as="span">fib 0 = 0</Text>
          <Text as="span">fib 1 = 1</Text>
          <Text as="span">fib n = fib (n - 2) + fib (n - 1)</Text>
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
