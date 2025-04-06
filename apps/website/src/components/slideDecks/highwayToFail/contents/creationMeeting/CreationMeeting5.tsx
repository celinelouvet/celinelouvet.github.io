import { Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Des points d’alerte ?"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack height="100%" gap="1em">
      <ThumbsDown variant="slide">
        Manque de volonté de les challenger sur leur vision
      </ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      En toute honnêteté, je ne me rappelle pas les avoir vraiment challengés
      sur leur idée à ce moment-là.
    </Text>
    <Text>
      Je n’y connaissais rien. Ils avaient l’air de savoir de quoi ils
      parlaient.
    </Text>
    <Text>
      Je pense que j’avais le comportement de quelqu’un passant un entretien
      d’embauche.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
