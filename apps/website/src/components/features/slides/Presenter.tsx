import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, Link, PageContainer } from '@/components/core';
import { useColorMode } from '@/components/ui';

export const Presenter: React.FC = function Presenter() {
  const { colorMode } = useColorMode();

  function onClick(talkId: string, withNotes: boolean) {
    window.open(`/slides/${talkId}/content`, '_blank');

    if (withNotes) {
      setTimeout(() => {
        window.open(`/slides/${talkId}/notes`, '_blank');
      }, 500);
    }
  }
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

        <Stack gap="8" width="100%">
          <HStack
            gap="8"
            width="100%"
            height="brand.800"
            backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
            borderRadius="md"
          >
            <Center
              width="30%"
              height="100%"
              backgroundColor="brand.400"
              color="brand.900"
              borderLeftRadius="md"
            >
              <H2Heading>Highway to fail</H2Heading>
            </Center>

            <SimpleGrid columns={2} gap="8" flex="1">
              <Center>
                <ButtonGroup gap="8">
                  <Button onClick={() => onClick('highway-to-fail', false)}>
                    Present
                  </Button>
                  <Button onClick={() => onClick('highway-to-fail', true)}>
                    Present with notes
                  </Button>
                </ButtonGroup>
              </Center>

              <Center>
                <ButtonGroup gap="8">
                  <Link.Internal to="/slides/highway-to-fail/print">
                    Print content
                  </Link.Internal>
                  <Link.Internal to="/slides/highway-to-fail/print-notes">
                    Print content with notes
                  </Link.Internal>
                </ButtonGroup>
              </Center>
              <Center>
                <ButtonGroup gap="8">
                  <Link.Internal to="/slides/highway_to_fail/results/mixit_2025">
                    Results
                  </Link.Internal>
                </ButtonGroup>
              </Center>
            </SimpleGrid>
          </HStack>

          <SimpleGrid
            columns={3}
            gap="8"
            width="100%"
            height="brand.800"
            backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
            borderRadius="md"
          >
            <Center
              backgroundColor="brand.400"
              color="brand.900"
              borderLeftRadius="md"
            >
              <H2Heading>The choice must go on</H2Heading>
            </Center>

            <Center>
              <ButtonGroup gap="8">
                <Button onClick={() => onClick('choice-must-go-on', false)}>
                  Present
                </Button>
                <Button onClick={() => onClick('choice-must-go-on', true)}>
                  Present with notes
                </Button>
              </ButtonGroup>
            </Center>

            <Center>
              <ButtonGroup gap="8">
                <Link.Internal to="/slides/choice-must-go-on/print">
                  Print content
                </Link.Internal>
                <Link.Internal to="/slides/choice-must-go-on/print-notes">
                  Print content with notes
                </Link.Internal>
              </ButtonGroup>
            </Center>
          </SimpleGrid>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
