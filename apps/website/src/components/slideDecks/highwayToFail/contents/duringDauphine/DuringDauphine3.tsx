import { Box, Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateur Paris-Dauphine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Anciens de Paris-Dauphine PSL.</Text>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Inscription au programme de l’incubateur</chakra.span>
        </Flex>
      </Box>
      <Box>
        <ThumbsUp variant="slide">Installation à partir d’avril 2018</ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      On va pouvoir s’installer à partir d’avril 2018 à la FAC de Dauphine.
    </Text>
    <Text>Ça sera un changement très apprécié.</Text>
    <Text>
      On quitte le canapé et on va pouvoir discuter avec d’autres gens.
    </Text>
    <Text>On bénéficie aussi de l’accès à divers experts.</Text>
    <Text>
      Les locaux sont dans la FAC de Dauphine. Me voici donc de retour au milieu
      des étudiants à 38 ans. Je me suis sentie vieille 👵🏻
    </Text>
    <Text>
      Et on a pu profiter du resto U au tarif étudiant. Ce n’est pas rien en
      termes de budget global.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
