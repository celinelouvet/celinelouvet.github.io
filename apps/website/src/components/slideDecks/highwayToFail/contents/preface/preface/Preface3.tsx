import { Icon } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Failure stories"
  >
    <Icon as={FaQuestion} boxSize="brand.800" color="brand.500" />
  </SlideContent>
);

export const note = (
  <SlideNote>A l’opposé, si je vous demande des « failure stories ».</SlideNote>
);

const slide = { content, note };
export default slide;
