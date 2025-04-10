import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuHandCoins } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Coût réel"
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
        <Icon as={LuHandCoins} boxSize="4em" color="brand.orange" />
      </Center>
      <Stack flex="1" fontSize="1.25em" gap="1em">
        <Text>Make-or-Buy</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
