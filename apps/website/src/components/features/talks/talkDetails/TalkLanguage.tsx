import { chakra } from '@chakra-ui/react';
import * as React from 'react';

import { type Convention } from '@/data';

export type TalkLanguageProps = {
  talk: { language: Convention['language'] };
};

export const TalkLanguage: React.FC<TalkLanguageProps> = ({
  talk: { language },
}) => {
  if (!language) {
    return null;
  }
  return <chakra.span>({language.toUpperCase()})</chakra.span>;
};
