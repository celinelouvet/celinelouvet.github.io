import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

const Timeline2 = React.lazy(() =>
  import('./components/Timeline2').then((module) => ({
    default: module.Timeline2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Center height="100%">
      <Timeline2 />
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Au moment de notre discussion, nous sommes mi décembre. Nous avons donc 6
      mois devant nous pour sortir une version beta et 9 pour la version finale.
    </Text>
    <Text>
      On ne peut pas se permettre de prendre plus de temps, car les concurrents
      vont faire pareil et, eux, ils ont déjà un produit en place.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
