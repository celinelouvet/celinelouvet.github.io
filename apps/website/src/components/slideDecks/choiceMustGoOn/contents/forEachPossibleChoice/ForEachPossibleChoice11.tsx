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
    title="À priori, non"
    alignContent="flex-start"
  >
    <Stack gap="brand.50" width="100%" height="100%" opacity={0}>
      <chakra.span>C’est une impression</chakra.span>

      <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
        <Icon as={BsArrowReturnRight} />
        <chakra.span>Un PoC peut être nécessaire, pour confirmer</chakra.span>
      </Flex>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
