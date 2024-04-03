import { Code, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell — Data type"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <Code width="100%" variant="slide">
        <Stack fontFamily="noto mono" gap="0.5em">
          <Text as="span">data User = User &#123; userId :: String</Text>
          <Text as="span">                 , name :: String</Text>
          <Text as="span">                 , age :: Int</Text>
          <Text as="span">                 &#125;</Text>
        </Stack>
      </Code>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
