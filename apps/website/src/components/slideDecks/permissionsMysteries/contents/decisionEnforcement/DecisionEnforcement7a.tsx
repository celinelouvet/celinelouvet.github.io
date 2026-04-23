import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Lucie veut lister les brouillons"
    topRightCorner="Exemple"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Cette fois-ci, c’est Lucie qui veut lister les brouillons.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
