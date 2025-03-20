import { Box, type BoxProps, Flex, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router';

import { HeaderContainer } from '@/components/core';
import { useResume } from '@/hooks';

import { HeaderDrawer } from './headerDrawer';
import { HeaderMenuTitle } from './headerMenuTitle';
import { HeaderMenuTrigger } from './headerMenuTrigger';
import { ColorModeMenu } from '../colorModeMenu';
import { LanguageMenu } from '../languageMenu';
import { useActiveSection } from '../useActiveSection.hook';

export const HeaderBelowLg = React.forwardRef<HTMLDivElement, BoxProps>(
  function HeaderBelowLg(props, ref) {
    const { pathname } = useLocation();
    const { slug: activeSlug } = useActiveSection(pathname);

    const { open, onOpen, onClose } = useDisclosure();
    const { firstname, lastname } = useResume();

    const fullname = `${firstname} ${lastname}`;

    return (
      <Box ref={ref} {...props}>
        <Flex
          backgroundGradient="brand"
          marginBottom="3"
          paddingBottom="1.5"
          paddingLeft="4"
        >
          <HeaderContainer justifyContent="space-between">
            <HeaderMenuTitle slug={activeSlug} />
            <HeaderMenuTrigger open={open} onOpen={onOpen} />
          </HeaderContainer>
        </Flex>

        <Flex
          alignItems={{ base: 'stretch', sm: 'center' }}
          justifyContent={{ base: 'center', sm: 'flex-end' }}
          direction={{ base: 'column', sm: 'row' }}
          gap="2"
          paddingLeft="6"
          paddingRight="6"
        >
          <LanguageMenu />
          <ColorModeMenu />
        </Flex>

        <HeaderDrawer title={fullname} open={open} onClose={onClose} />
      </Box>
    );
  },
);
