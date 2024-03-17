import { Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Rupture de la période d’essai.</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
