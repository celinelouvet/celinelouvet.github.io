import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuCircleAlert } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Réussir un projet"
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="3em"
    >
      <Center width="20%">
        <Icon as={LuCircleAlert} boxSize="4em" color="brand.orange" />
      </Center>
      <Stack flex="1" color="brand.300" fontSize="1.25em" gap="1em">
        <Text>Besoins flous</Text>
        <Text>Choix technologique non-maîtrisé</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
