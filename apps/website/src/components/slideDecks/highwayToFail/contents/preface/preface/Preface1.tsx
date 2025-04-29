import { Center, Icon } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

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

export const note = (
  <SlideNote>
    Si je vous demande des noms de success stories, je pense que vous en aurez
    rapidement en tête et ce sera potentiellement des startups françaises.
  </SlideNote>
);

const slide = { content, note };
export default slide;
