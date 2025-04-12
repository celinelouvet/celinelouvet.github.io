import { Flex, Icon, Stack, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Objectifs à atteindre"
    alignContent="flex-start"
  >
    <Stack gap="0.5em" width="100%" height="100%">
      <chakra.span>Comme pour une User Story</chakra.span>

      <Flex alignItems="center" gap="0.5em" marginLeft="1em" opacity={0}>
        <Icon as={BsArrowReturnRight} />
        <chakra.span>Critères d'acceptation</chakra.span>
      </Flex>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
