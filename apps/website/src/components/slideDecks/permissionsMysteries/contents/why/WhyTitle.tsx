import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Pourquoi ?"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={5}>
    <Text>
      Avant de chercher à mettre en place de la gestion de permissions,
      demandons-nous pourquoi nous souhaiterions le faire ?
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
