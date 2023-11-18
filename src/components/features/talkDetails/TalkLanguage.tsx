import { Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Convention } from '@/data';

export type TalkLanguageProps = {
  talk: { language: Convention['language'] };
};

export const TalkLanguage: FC<TalkLanguageProps> = ({ talk }) => {
  const { language } = talk;

  if (!language) {
    return null;
  }
  return <Text as="span">({language.toUpperCase()})</Text>;
};
