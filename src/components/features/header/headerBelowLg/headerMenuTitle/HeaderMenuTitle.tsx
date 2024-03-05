import { DarkMode, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Slug } from '@/data';

type HeaderMenuTitleProps = {
  slug: Slug;
};

export const HeaderMenuTitle: FC<HeaderMenuTitleProps> = ({ slug }) => {
  const { t } = useTranslation('header', { keyPrefix: 'nav' });

  return (
    <>
      <DarkMode>
        <Text
          fontSize="3xl"
          fontFamily="PT Sans Narrow"
          fontWeight={400}
          flexGrow={1}
          color="white"
          as="span"
        >
          {t(slug)}
        </Text>
      </DarkMode>
    </>
  );
};
