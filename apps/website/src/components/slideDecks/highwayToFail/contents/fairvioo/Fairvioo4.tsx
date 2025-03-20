import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="La raison ?"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Peu de suspens, on s’est plantés.</Text>
    <Text>Mais pourquoi ? Et pourquoi revenir dessus ?</Text>
    <Text>
      Analyser et comprendre les raisons d’un échec peut nous permettre de les
      éviter la fois suivante.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
