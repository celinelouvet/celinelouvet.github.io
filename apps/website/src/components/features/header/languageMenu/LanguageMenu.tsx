import * as React from 'react';

import { useLogger } from 'src/hooks';

import { LanguageMenuInner } from './LanguageMenuInner';

export const LanguageMenu: React.FC = () => {
  const { log } = useLogger();

  return <LanguageMenuInner log={log} />;
};
