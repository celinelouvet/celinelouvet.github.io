import { Text } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Slug } from '../../sections';

type HeaderMenuTitleProps = {
  slug: Slug;
};

export const HeaderMenuTitle: React.FC<HeaderMenuTitleProps> =
  function HeaderMenuTitle({ slug }) {
    const { t } = useTranslation('header', { keyPrefix: 'nav' });

    return (
      <Text
        fontSize="3xl"
        fontFamily="PT Sans Narrow"
        fontWeight={400}
        flexGrow={1}
        color="white"
      >
        {t(slug)}
      </Text>
    );
  };
