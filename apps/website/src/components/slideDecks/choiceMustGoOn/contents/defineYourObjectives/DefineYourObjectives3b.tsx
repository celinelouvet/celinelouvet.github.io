import { Flex, Icon, Stack, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Objectifs à atteindre"
    alignContent="flex-start"
  >
    <Stack gap="brand.50" width="100%" height="100%">
      <chakra.span>Comme pour une User Story</chakra.span>

      <Flex
        alignItems="center"
        gap="brand.50"
        marginLeft="brand.100"
        opacity={0}
      >
        <Icon as={BsArrowReturnRight} />
        <chakra.span>Critères d'acceptation</chakra.span>
      </Flex>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
