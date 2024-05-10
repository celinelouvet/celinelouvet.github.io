import { Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Podcast } from '@/data';

export type AuthorTextProps = Pick<Podcast, 'author'>;

export const AuthorText: FC<AuthorTextProps> = ({ author }) => {
  const { t } = useTranslation('resume', { keyPrefix: 'podcasts' });
  if (!author) {
    return null;
  }

  return (
    <Text as="span">
      {t('by')} {author}
    </Text>
  );
};
