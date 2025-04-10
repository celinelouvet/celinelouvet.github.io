import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuTarget } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Critères d'acceptation"
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
        <Icon as={LuTarget} boxSize="4em" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <Text>Se concentrer sur la valeur à apporter</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
