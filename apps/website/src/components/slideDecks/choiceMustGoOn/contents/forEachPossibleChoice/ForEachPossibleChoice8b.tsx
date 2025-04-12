import { Box, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="GCP Datastore"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em" alignItems="center">
      <chakra.strong>Est-ce que ça répond au besoin ?</chakra.strong>
      <HStack width="100%" gap="1em" alignItems="center">
        <Box
          flex="2"
          gap="0"
          padding="1em"
          borderRadius="md"
          backgroundColor="brand.800"
        >
          <chakra.span>Sauvegarder des données</chakra.span>
        </Box>

        <Box opacity={0}>
          <Icon as={TbArrowBigRightFilled} />
        </Box>

        <Box flex="1" opacity={0}>
          <chakra.span>Oui</chakra.span>
        </Box>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
