import { Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

export const BlogLayout: FC = () => {
  const { t } = useTranslation('blog');
  return <Text>{t('title')}</Text>;
};
