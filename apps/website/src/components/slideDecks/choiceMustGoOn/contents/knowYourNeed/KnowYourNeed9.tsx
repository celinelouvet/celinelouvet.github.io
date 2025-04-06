import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuMessageCircleQuestion } from 'react-icons/lu';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Connaître son besoin"
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
        <Icon as={LuMessageCircleQuestion} boxSize="4em" color="brand.500" />
      </Center>
      <Stack flex="1" color="brand.300" fontSize="1.25em" gap="1em">
        <Text>Méthode des « 5 pourquoi »</Text>
        <Text>Utilisée pour comprendre la cause profonde d’un problème.</Text>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
