import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'From scratch', shown: false },
  { text: 'Par domaine', shown: false },
  { text: 'Par migrations successives', shown: false },
  { text: 'A/B testing', shown: false },
  { text: 'etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Questions à se poser"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Text>Comment mettre en place notre solution ?</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote>Scopes progressifs: podcast sylvain</SlideNote>;

const slide = { content, note };
export default slide;
