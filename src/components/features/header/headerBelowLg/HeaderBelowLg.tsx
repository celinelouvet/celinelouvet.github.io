import { Flex, useDisclosure, useToken } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { type FC } from 'react';

import { HeaderContainer } from '@/components/core';
import { useActiveSection, useResume } from '@/hooks';

import { HeaderDrawer } from './headerDrawer';
import { HeaderMenuButton } from './headerMenuButton';
import { HeaderMenuTitle } from './headerMenuTitle';
import { ColorModeMenu } from '../colorModeMenu';
import { LanguageMenu } from '../languageMenu';

export const HeaderBelowLg: FC = () => {
  const { asPath } = useRouter();
  const { slug: activeSlug } = useActiveSection(asPath);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [brandGradient] = useToken('colors', ['brandGradient']);
  const { firstname, lastname } = useResume();

  const fullname = `${firstname} ${lastname}`;

  return (
    <>
      <Flex bgGradient={`linear-gradient(${brandGradient})`} __css={navStyle}>
        <HeaderContainer
          paddingTop="1.5"
          paddingBottom="1.5"
          display="flex"
          flexDirection="row"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <HeaderMenuTitle slug={activeSlug} />
          <HeaderMenuButton isOpen={isOpen} onOpen={onOpen} />
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

      <HeaderDrawer fullname={fullname} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const navStyle = {
  marginBottom: '3',
  paddingBottom: '1.5',
  paddingLeft: '6',
};
