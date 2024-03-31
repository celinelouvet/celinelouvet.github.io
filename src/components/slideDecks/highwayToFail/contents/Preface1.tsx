import { Center, Icon } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Success stories"
    alignContent="flex-start"
  >
    <Center>
      <Icon as={FaQuestion} boxSize="8em" color="brand.500" />
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
