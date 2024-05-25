import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineBefore } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Mon historique"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
    topRightCorner="Début 2017"
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>
            ESN toute ma carrière, beaucoup de régie (chez le client)
          </ListItem>
          <ListItem>Marre des gros clients et des cahiers des charges</ListItem>
        </UnorderedList>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Chez beaucoup de gros clients. Ils ont de l’argent et des cahiers des
      charges parfois monstrueux.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
