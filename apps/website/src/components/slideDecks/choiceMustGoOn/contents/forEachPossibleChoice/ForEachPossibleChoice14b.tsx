import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Métriques techniques' },
  { text: 'Métriques orientées domaine', shown: false },
  { text: 'Audit externe ou interne', shown: false },
  { text: 'etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Questions à se poser"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Text>
        Comment mesurer qu’on valide les critères d’acceptation définis ?
      </Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>Ça va dépendre de ce qui est en place chez vous</SlideNote>
);

const slide = { content, note };
export default slide;
