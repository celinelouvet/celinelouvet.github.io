import { Center } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { GivenWhenThen } from './components/givenWhenThen';

const data = {
  given: {
    text: 'Je suis admin',
  },
  when: {
    text: 'J’ajoute un utilisateur',
  },
  then: {
    text: 'Il reçoit un email pour se connecter',
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
