import { Flex, Icon, Stack, StackItem, Text } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur Paris-Dauphine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Anciens de Paris-Dauphine PSL.</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <Text as="span">Inscription au programme de l’incubateur</Text>
        </Flex>
      </StackItem>
      <StackItem>
        <ThumbsUp variant="slide">Installation à partir d’avril 2018</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Ça sera un changement très apprécié.</Text>
    <Text>Pouvoir discuter avec d’autres gens fait du bien.</Text>
    <Text>On a bénéficié de l’accès à des experts sur divers sujets.</Text>
    <Text>
      Par contre, les locaux sont dans la FAC de Dauphine. Me voici donc de
      retour au milieu des étudiants à 38 ans. Je me suis sentie vieille 👵🏻
    </Text>
    <Text>
      Et on a pu profiter du resto U au tarif étudiant. Ce n’est pas rien en
      termes de budget global.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
