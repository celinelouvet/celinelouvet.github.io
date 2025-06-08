import * as React from 'react';

import { useLogger } from '@/hooks';

import { LanguageMenuInner } from './LanguageMenuInner';

export const LanguageMenu: React.FC = () => {
  const { log } = useLogger();

  return <LanguageMenuInner log={log} />;
};
