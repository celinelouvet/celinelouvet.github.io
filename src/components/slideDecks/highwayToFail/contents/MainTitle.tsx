import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';
import { highwayToFailTalkFr as talk } from '@/data/talks';

export const content = (
  <SlideContent
    type={SlideContentTypes.title}
    title={talk.title}
    author={talk.author}
  />
);

const note = (
  <SlideNote>
    <Text>Bonjour à tous et à toutes,</Text>
    <Text>
      Avant toutes choses, je voulais vous remercier d’être venus m’écouter.
    </Text>
    <Text>
      C’est la première fois que je vais présenter ce talk. J’espère qu’il
      pourra vous apprendre des choses.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
