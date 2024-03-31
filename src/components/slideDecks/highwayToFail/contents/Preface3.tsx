import { Icon } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Failure stories"
  >
    <Icon as={FaQuestion} boxSize="8em" color="brand.500" />
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
