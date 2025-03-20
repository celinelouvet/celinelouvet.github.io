import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Janvier 2018"
  >
    <Text>Version simplifiée ne suffira pas</Text>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>En effet, la version simplifiée ne leur suffira pas.</Text>
    <Text>
      Je prévoyais faire la version simplifiée, puis passer au développement du
      produit.
    </Text>
    <Text>
      Mais, pour eux, j’allais enchaîner sur la version complète du site, juste
      après avoir fini la version simplifiée.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
