import { Flex, HStack, Icon, Stack, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Budget et temps"
    alignContent="flex-start"
  >
    <HStack gap="1em" height="100%" width="100%" justifyContent="space-between">
      <Stack gap="0.5em" height="100%">
        <chakra.span>Un jour de développement</chakra.span>

        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>~ 500 €</chakra.span>
        </Flex>
      </Stack>

      <Stack gap="0.5em" height="100%">
        <chakra.span>2 personnes pendant un trimestre</chakra.span>

        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>500 € x 2 personnes x 20 jours x 3 mois</chakra.span>
        </Flex>
        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>~ 60 k€</chakra.span>
        </Flex>
      </Stack>
    </HStack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
