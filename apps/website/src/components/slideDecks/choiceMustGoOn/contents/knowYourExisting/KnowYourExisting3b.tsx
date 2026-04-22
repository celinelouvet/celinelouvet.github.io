import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Savoir ce qui se fait,', shown: false },
  { text: 'Aider à choisir,', shown: false },
  { text: 'Ne plus revenir sur un choix.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Tech radar"
    alignContent="flex-start"
  >
    <Stack gap="brand.100" height="100%" width="100%">
      <Text>
        Liste des technos (ou méthodes) qui sont utilisées (ou ont été
        utilisées) avec leur niveau de maîtrise.
      </Text>
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
