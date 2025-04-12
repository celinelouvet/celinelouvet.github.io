import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Réponse en moins de 1ms jusqu’à 100 requêtes par seconde' },
  {
    text: 'Endpoints idempotents : Quand on reçoit 2 fois la même requête, alors le résultat doit être le même.',
  },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Définition d’une API"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em">
      <Text>Définition de SLA (Service Level Agreement)</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
