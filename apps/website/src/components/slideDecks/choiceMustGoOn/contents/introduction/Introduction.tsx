import { Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { choiceMustGoOnTalkFr as talk } from 'src/data/talks';

export const content = (
  <SlideContent
    type={SlideContentTypes.introduction}
    author={talk.author}
    descriptions={talk.descriptions}
    socials={talk.socials}
  />
);

export const note = (
  <SlideNote>
    <Text>Je m’appelle Céline LOUVET.</Text>
    <Text>Je suis lead developer chez Shine.</Text>
    <Text>
      Au quotidien, je suis développeuse backend. Je me suis spécialisée sur les
      architectures cloud.
    </Text>
    <Text>
      J’aime particulièrement la recherche de stabilité et de qualité d’une
      application. C’est-à-dire ce petit moment où on passe de « produire vite »
      à « produire bien ».
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
