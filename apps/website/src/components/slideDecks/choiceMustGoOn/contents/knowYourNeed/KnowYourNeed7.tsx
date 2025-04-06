import { Center, Stack, Text } from '@chakra-ui/react';
import { TbArrowBigDownFilled } from 'react-icons/tb';

import { Quote } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Connaître son besoin"
    alignContent="flex-start"
  >
    <Stack gap="1em" width="100%">
      <Quote title="Le client" variant="slide">
        <Text>J’ai besoin d’un bouton pour télécharger un CSV.</Text>
      </Quote>
      <Center color="brand.400" fontSize="2em">
        <TbArrowBigDownFilled />
      </Center>
      <Quote title="Le client" variant="slide">
        <Text>
          J’envoie un rapport comparatif aux stakeholders, en début de mois.
        </Text>
      </Quote>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
