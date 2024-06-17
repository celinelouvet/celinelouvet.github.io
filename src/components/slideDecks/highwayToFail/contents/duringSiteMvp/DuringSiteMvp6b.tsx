import { Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Stack>
      <StackItem>
        <Text as="span">Ne surtout pas le coder !</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je ne le ferai surtout pas !</Text>
    <Text>
      En le codant, j’ai perdu un temps très précieux qui a servi à créer un
      truc qui n’apporte aucune valeur !
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
