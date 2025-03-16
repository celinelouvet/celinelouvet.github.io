import { List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="A refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack gap="1em">
      <List.Root>
        <List.Item>Poser des questions lors de la rencontre</List.Item>
        <List.Item>Comprendre le business plan</List.Item>
        <List.Item>Comprendre la procédure ou passer par un avocat</List.Item>
      </List.Root>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je me renseignerai sur la procédure ou je passerai par un avocat pour
      éviter de me retrouver dans une situation similaire.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
