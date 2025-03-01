import { Box, type BoxProps, ButtonGroup, Flex, For } from '@chakra-ui/react';
import * as React from 'react';

import { HeaderContainer } from '@/components/core';

import { HeaderButton } from './headerButton';
import { ColorModeMenu } from '../colorModeMenu';
import { LanguageMenu } from '../languageMenu';
import { type Section, sections } from '../sections';

export const HeaderAboveLg = React.forwardRef<HTMLDivElement, BoxProps>(
  function (props, ref) {
    return (
      <Box ref={ref} {...props}>
        <Flex bgGradient="brand" marginBottom="3" paddingBottom="1.5">
          <HeaderContainer>
            <ButtonGroup gap="4">
              <For each={sections}>
                {(section: Section) => (
                  <HeaderButton key={section.slug} section={section} />
                )}
              </For>
            </ButtonGroup>
          </HeaderContainer>
        </Flex>

        <Flex alignItems="center" justifyContent="end" gap="2" paddingRight="6">
          <LanguageMenu />
          <ColorModeMenu />
        </Flex>
      </Box>
    );
  },
);
