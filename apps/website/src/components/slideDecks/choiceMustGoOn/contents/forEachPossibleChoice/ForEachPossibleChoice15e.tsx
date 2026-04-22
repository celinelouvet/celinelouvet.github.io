import { Box, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const criterias = [
  { text: 'Réponse en moins de 1ms jusqu’à 100 requêtes par seconde' },
  { text: 'Endpoints idempotents' },
];
const responses = [
  { text: 'Métriques techniques, avec alertes en-dessous du seuil' },
  { text: 'Tests end-to-end', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Définition d’une API"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100" alignItems="center">
      <chakra.strong>
        Comment mesurer qu’on valide les critères définis ?
      </chakra.strong>
      <HStack width="100%" gap="brand.100" alignItems="center">
        <Stack flex="1">
          <Stack
            gap="0"
            padding="brand.50"
            borderRadius="md"
            backgroundColor="brand.800"
          >
            <chakra.strong>Critères</chakra.strong>

            <ProgressiveList
              type="numbered"
              items={criterias}
              gap="brand.100"
              marginBottom="0"
            />
          </Stack>
        </Stack>

        <Box>
          <Icon as={TbArrowBigRightFilled} />
        </Box>

        <Stack flex="1" gap="brand.100">
          <ProgressiveList
            type="numbered"
            items={responses}
            gap="brand.100"
            marginBottom="0"
          />
        </Stack>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
