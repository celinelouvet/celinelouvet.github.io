import { Button, DarkMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Section } from '@/data';
import { useActiveSection } from '@/hooks';

type HeaderButtonProps = {
  section: Section;
};

export const HeaderButton: FC<HeaderButtonProps> = ({ section }) => {
  const activeSection = useActiveSection();
  const { t } = useTranslation('header', { keyPrefix: 'nav' });

  return (
    <DarkMode>
      <Button
        isActive={activeSection.slug === section.slug}
        as={NextLink}
        href={section.href}
        size="2xl"
        variant="ghost"
        fontFamily="PT Sans Narrow"
        fontWeight={400}
        _active={{ backgroundColor: 'brand.300' }}
      >
        {t(section.slug)}
      </Button>
    </DarkMode>
  );
};
