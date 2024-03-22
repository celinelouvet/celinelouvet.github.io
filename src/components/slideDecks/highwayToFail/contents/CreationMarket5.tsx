import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack spacing="1em">
      <Text>Clients de type PME</Text>

      <Stack spacing="0.5em">
        <Text as="span">Motivation éthique: 1 avis = 1 micro-don</Text>

        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <Text as="span">Déductible des impots de Fairvioo</Text>
        </Flex>
      </Stack>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
