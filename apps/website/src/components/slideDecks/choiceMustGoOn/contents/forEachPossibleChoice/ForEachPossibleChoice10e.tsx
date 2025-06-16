import { Box, HStack, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const cons = [
  { text: 'Schemaless' },
  { text: '« Pay as you go »' },
  { text: 'Pas de relationnel' },
  { text: 'Pas de filtre par propriété, sans index prédéfini' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="GCP Datastore"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100" alignItems="center">
      <Text fontWeight="700">
        Est-ce que les inconvénients sont acceptables ?
      </Text>
      <HStack width="100%" gap="brand.100" alignItems="center">
        <Box
          flex="2"
          gap="0"
          padding="brand.100"
          borderRadius="md"
          backgroundColor="brand.800"
        >
          <ProgressiveList type="numbered" items={cons} marginBottom="0" />
        </Box>

        <Box>
          <Icon as={TbArrowBigRightFilled} />
        </Box>

        <Stack flex="1" gap="brand.100" textAlign="center">
          <Text>Domaine hautement relationnel</Text>
          <chakra.span>
            <chakra.strong>À priori,</chakra.strong> non
          </chakra.span>
        </Stack>
      </HStack>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
