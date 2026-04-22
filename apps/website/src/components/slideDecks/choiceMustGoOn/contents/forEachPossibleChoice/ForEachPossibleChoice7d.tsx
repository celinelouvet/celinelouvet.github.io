import { Stack } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Est-ce que ça répond au besoin ?' },
  { text: 'Est-ce que ça répond aux contraintes ?' },
  { text: 'Est-ce que les inconvénients sont acceptables ?' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Questions à se poser"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
