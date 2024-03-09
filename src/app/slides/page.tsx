'use client';

import {
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Page() {
  const { colorMode } = useColorMode();

  const onClick = (withNotes: boolean) => {
    window.open('/slides/content', '_blank');

    if (withNotes) {
      setTimeout(() => {
        window.open('/slides/notes', '_blank');
      }, 500);
    }
  };
  return (
    <Stack minHeight="50vh" alignItems="center" justifyContent="space-evenly">
      {colorMode !== 'light' ? (
        <Flex alignItems="baseline" gap="8">
          <Text>{colorMode}</Text>

          <Button as={NextLink} href="/" backgroundColor="red.500">
            Change color mode
          </Button>
        </Flex>
      ) : null}

      <ButtonGroup gap="8">
        <Button as={NextLink} href="" onClick={() => onClick(false)}>
          Present
        </Button>
        <Button as={NextLink} href="" onClick={() => onClick(true)}>
          Present with notes
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
