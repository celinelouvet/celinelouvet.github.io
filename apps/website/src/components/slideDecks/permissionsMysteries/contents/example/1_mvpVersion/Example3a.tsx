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
    topRightCorner="MVP"
    alignContent="flex-start"
  >
    <Stack gap="brand.50" width="100%" height="100%" opacity={0}>
      <chakra.span>
        Application permettant d’écrire et de publier des articles
      </chakra.span>

      <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
        <Icon as={BsArrowReturnRight} />
        <chakra.span>Système de blog privé, auto-hébergé</chakra.span>
      </Flex>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      On va considérer un système de blog privé. On va donc pouvoir écrire des
      articles et les publier.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
