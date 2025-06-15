import { Icon, Text } from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Failure stories"
  >
    <Icon as={FaEllipsisH} boxSize="brand.800" color="brand.500" />
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      C’est tout de suite un peu plus compliqué. En tout cas, moi, je n’en ai
      aucune qui me vient en tête.
    </Text>
    <Text>
      En recherchant des exemples, j’ai surtout trouvé des histoires d’échec où
      la personne a réussi à rebondir, après la liquidation.
    </Text>
    <Text>Les échecs purs et simples sont nettement plus discrets.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
