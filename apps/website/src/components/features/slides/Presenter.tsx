import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, Link, PageContainer } from '@/components/core';
import { useColorMode } from '@/components/ui';

export const Presenter: React.FC = () => {
  const { colorMode } = useColorMode();

  const onClick = (talkId: string, withNotes: boolean) => {
    window.open(`/slides/${talkId}/content`, '_blank');

    if (withNotes) {
      setTimeout(() => {
        window.open(`/slides/${talkId}/notes`, '_blank');
      }, 500);
    }
  };
  return (
    <PageContainer>
      <Stack
        width="100%"
        minHeight="50vh"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {colorMode !== 'light' ? (
          <Flex alignItems="baseline" gap="8">
            <Text>{colorMode}</Text>
            <Text color="red">Change color mode</Text>
          </Flex>
        ) : null}

        <SimpleGrid
          columns={3}
          gap="8"
          width="100%"
          height="8em"
          backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
          borderRadius="md"
        >
          <Center
            backgroundColor="brand.400"
            color="brand.900"
            borderLeftRadius="md"
          >
            <H2Heading>Highway to fail</H2Heading>
          </Center>

          <Center>
            <ButtonGroup gap="8">
              <Button onClick={() => onClick('highwayToFail', false)}>
                Present
              </Button>
              <Button onClick={() => onClick('highwayToFail', true)}>
                Present with notes
              </Button>
            </ButtonGroup>
          </Center>

          <Center>
            <ButtonGroup gap="8">
              <Link.Internal to="/slides/highwayToFail/print">
                Print mode
              </Link.Internal>
              <Link.Internal to="/slides/highwayToFail/printNotes">
                Print mode
              </Link.Internal>
            </ButtonGroup>
          </Center>
        </SimpleGrid>
      </Stack>
    </PageContainer>
  );
};
