import { Stack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';


export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Conclusion"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em">
      <ProgressiveList
        type="numbered"
        items={[
          { text: 'Bien comprendre le besoin' },
          { text: 'Réfléchir aux solutions possibles' },
          { text: 'Choisir la solution la moins « pire »' },
          { text: 'Mettre en place la solution', shown: false },
          { text: 'Mesurer les résultats', shown: false },
          { text: 'Itérer si besoin', shown: false },
          { text: 'Documenter', shown: false },
        ]}
      />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
