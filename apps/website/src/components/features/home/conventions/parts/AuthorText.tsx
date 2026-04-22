import { chakra } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Podcast } from 'src/data';

export type AuthorTextProps = Pick<Podcast, 'author'>;

export const AuthorText: React.FC<AuthorTextProps> = function AuthorText({
  author,
}) {
  const { t } = useTranslation('resume', { keyPrefix: 'podcasts' });
  if (!author) {
    return null;
  }

  return (
    <chakra.span>
      {t('by')} {author}
    </chakra.span>
  );
};
