import { Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur Paris-Dauphine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Anciens de Paris-Dauphine PSL.</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Du même ordre d’idée, ils ont tous les 2 faits leurs études à la fac de
      Dauphine.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
