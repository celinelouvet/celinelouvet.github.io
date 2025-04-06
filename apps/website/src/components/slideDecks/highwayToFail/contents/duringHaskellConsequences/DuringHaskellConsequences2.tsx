import { Stack, Text } from '@chakra-ui/react';

import { Failure } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les conséquences ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Eté 2018"
  >
    <Stack gap="1em">
      <Failure variant="slide">Oups, la roadmap</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Haha, et bien là, j’ai totalement explosé les dates indiquées dans la
      roadmap.
    </Text>
    <Text>
      Par contre, suite à ça, ma productivité s’est mise à monter en flèche. Car
      le code était simple, facile à lire, facile à améliorer.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
