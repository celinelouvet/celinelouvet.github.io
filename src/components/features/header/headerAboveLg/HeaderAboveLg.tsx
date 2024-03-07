import { ButtonGroup, Flex, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { HeaderContainer } from '@/components/core';
import { sections } from '@/data';

import { HeaderButton } from './headerButton';
import { ColorModeMenu } from '../colorModeMenu';
import { LanguageMenu } from '../languageMenu';

export const HeaderAboveLg: FC = () => {
  const [brandGradient] = useToken('colors', ['brandGradient']);

  return (
    <>
      <Flex
        bgGradient={`linear-gradient(${brandGradient})`}
        marginBottom="3"
        paddingBottom="1.5"
      >
        <HeaderContainer paddingTop="1.5" paddingBottom="1.5">
          <ButtonGroup spacing="4">
            {sections.map((section) => (
              <HeaderButton key={section.href} section={section} />
            ))}
          </ButtonGroup>
        </HeaderContainer>
      </Flex>
      <Flex alignItems="center" justifyContent="end" gap="2" paddingRight="6">
        <LanguageMenu />
        <ColorModeMenu />
      </Flex>
    </>
  );
};
