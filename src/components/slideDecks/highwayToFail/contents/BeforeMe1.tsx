import { ListItem, Stack, StackItem, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>En couple, avec un enfant et un crédit</ListItem>
          <ListItem>Déjà eu un burn‑out</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
