import { Center, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { LuRepeat2 } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Mise en place"
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
        <Center position="relative">
          <Icon as={LuRepeat2} boxSize="4em" color="brand.500" />
        </Center>
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <chakra.span>Itérer tant que le besoin n’est pas satisfait</chakra.span>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
