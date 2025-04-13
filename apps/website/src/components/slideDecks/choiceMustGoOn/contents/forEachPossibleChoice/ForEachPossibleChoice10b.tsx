import { Box, HStack, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const cons = [
  { text: 'Schemaless' },
  { text: '« Pay as you go »', shown: false },
  { text: 'Pas de relationnel', shown: false },
  { text: 'Pas de filtre par propriété, sans index prédéfini', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="GCP Datastore"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em" alignItems="center">
      <Text fontWeight="700">
        Est-ce que les inconvénients sont acceptables ?
      </Text>
      <HStack width="100%" gap="1em" alignItems="center">
        <Box
          flex="2"
          gap="0"
          padding="1em"
          borderRadius="md"
          backgroundColor="brand.800"
        >
          <ProgressiveList type="numbered" items={cons} marginBottom="0" />
        </Box>

        <Box opacity={0}>
          <Icon as={TbArrowBigRightFilled} />
        </Box>

        <Stack flex="1" gap="1em" textAlign="center" opacity={0}>
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
