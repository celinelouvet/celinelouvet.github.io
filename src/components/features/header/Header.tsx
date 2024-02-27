import { Center, Flex, Grid, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderContainer } from '@/components/core';

import { ColorModeMenu } from './colorModeMenu';
import { LanguageMenu } from './languageMenu';

type ActiveSection = 'home' | 'resume' | 'talks' | 'blog';

const useActiveSection = (): ActiveSection => {
  const { asPath } = useRouter();

  if (asPath.includes('talks')) {
    return 'talks';
  }
  if (asPath.includes('resume')) {
    return 'resume';
  }
  if (asPath.includes('blog')) {
    return 'blog';
  }
  return 'home';
};

export const Header: FC = () => {
  const activeSection = useActiveSection();

  const { t } = useTranslation('header', { keyPrefix: 'nav' });
  return (
    <>
      <Flex __css={navStyle}>
        <HeaderContainer>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Center
              __css={navItemStyle}
              bgColor={activeSection === 'home' ? 'brand.300' : 'transparent'}
            >
              <Link as={NextLink} href="/">
                {t('home')}
              </Link>
            </Center>
            <Center
              __css={navItemStyle}
              bgColor={activeSection === 'resume' ? 'brand.300' : 'transparent'}
            >
              <Link as={NextLink} href="/resume">
                {t('resume')}
              </Link>
            </Center>
            <Center
              __css={navItemStyle}
              bgColor={activeSection === 'talks' ? 'brand.300' : 'transparent'}
            >
              <Link as={NextLink} href="/talks">
                {t('talks')}
              </Link>
            </Center>
            <Center
              __css={navItemStyle}
              bgColor={activeSection === 'blog' ? 'brand.300' : 'transparent'}
            >
              <Link as={NextLink} href="/blog">
                {t('blog')}
              </Link>
            </Center>
          </Grid>
        </HeaderContainer>
      </Flex>
      <Flex alignItems="center" justifyContent="end" gap={2} paddingRight={6}>
        <LanguageMenu />
        <ColorModeMenu />
      </Flex>
    </>
  );
};

const brand100_rgb = '42, 89, 120';

const navStyle = {
  backgroundImage: `linear-gradient(180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%)`,
  marginBottom: '12px',
  fontFamily: 'PT Sans Narrow',
  fontWeight: '400',
  paddingBottom: '6px',
  color: 'white',
};

const navItemStyle = {
  fontSize: '1.5em',
  padding: '24px 0 18px 0',
};
