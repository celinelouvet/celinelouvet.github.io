import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Identité ≠ Permissions"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = (
  <SlideNote minutes={5}>
    <Text>
      Il y a un point très important à clarifier avant de pouvoir poursuivre.
    </Text>
    <Text>Identité n’est pas Permissions.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
