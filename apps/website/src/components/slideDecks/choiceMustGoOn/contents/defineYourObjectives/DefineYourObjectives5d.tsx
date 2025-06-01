import { Center } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { GivenWhenThen } from './components/givenWhenThen';

const data = {
  given: {
    text: 'Un backup a été fait à 3h',
    and: 'Les données ont été corrompues à 9h',
    shown: ['text', 'and'],
  },
  when: {
    text: 'Le backup est injecté',
    shown: ['text'],
  },
  then: {
    text: 'Les données avant 3h sont récupérées',
    and: 'Celles entre 3h et 9h sont perdues',
    shown: [],
  },
};

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Critères d'acceptation"
    alignContent="flex-start"
  >
    <Center width="100%" height="100%">
      <GivenWhenThen {...data} />
    </Center>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
