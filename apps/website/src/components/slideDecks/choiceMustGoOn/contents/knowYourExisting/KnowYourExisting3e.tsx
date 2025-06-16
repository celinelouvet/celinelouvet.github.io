import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Savoir ce qui se fait,' },
  { text: 'Aider à choisir,' },
  { text: 'Ne plus revenir sur un choix.' },
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
