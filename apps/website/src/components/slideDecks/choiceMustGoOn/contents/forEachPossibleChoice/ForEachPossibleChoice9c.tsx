import { Box, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Doit être disponible sur GCP' },
  { text: 'Doit avoir un SDK pour NodeJs' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="GCP Datastore"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100" alignItems="center">
      <chakra.strong>Est-ce que ça répond aux contraintes ?</chakra.strong>
      <HStack width="100%" gap="brand.100" alignItems="center">
        <Box
          flex="2"
          gap="0"
          padding="brand.100"
          borderRadius="md"
          backgroundColor="brand.800"
        >
          <ProgressiveList type="numbered" items={items} marginBottom="0" />
        </Box>

        <Box>
          <Icon as={TbArrowBigRightFilled} />
        </Box>

        <Box flex="1">
          <chakra.span>Oui</chakra.span>
        </Box>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
