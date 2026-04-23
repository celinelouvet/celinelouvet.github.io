import { Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Le produit"
    topRightCorner="Version 2"
    alignContent="flex-start"
  >
    <Stack gap="brand.50" width="100%" height="100%" opacity={0}>
      <chakra.span>
        Plateforme permettant de créer des sites de publication d’articles
      </chakra.span>

      <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
        <Icon as={BsArrowReturnRight} />
        <chakra.span>Plateforme de blogs</chakra.span>
      </Flex>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Elle deviendra une plateforme de blogs. C’est-à-dire qu’un utilisateur
      pourra s'inscrire,créer un site et y publier des articles.
    </Text>
    <Text>Un exemple serait Medium ou Substack.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
