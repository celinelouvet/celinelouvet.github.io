import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

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
          <ListItem>En couple, avec un enfant et un crédit bancaire</ListItem>
          <ListItem>Déjà eu un burn‑out</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>J’avais déjà eu un burn‑out, jamais vraiment guéri.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
