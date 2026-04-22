import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuListChecks } from 'react-icons/lu';

import { H3Heading } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision & Exécution"
    alignContent="flex-start"
  >
    <HStack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="brand.300"
    >
      <Center width="20%">
        <Icon as={LuListChecks} boxSize="brand.400" color="brand.500" />
      </Center>
      <Stack flex="1" fontSize="brand.125" gap="brand.100">
        <H3Heading variant="slide">Tests de l’enforcer</H3Heading>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Retenez ceci : pensez à bien tester l’enforcer, à minima. C’est dessus que
      repose votre sécurité.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
