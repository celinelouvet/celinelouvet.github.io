import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" height="100%">
      <Text>Clever Cloud cherche à promouvoir l’hébergement de Haskell.</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Au même moment, Clever Cloud cherche à en promouvoir l’hébergement.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
