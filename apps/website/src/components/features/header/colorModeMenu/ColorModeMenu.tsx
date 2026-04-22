import * as React from 'react';

import { useLogger } from 'src/hooks';

import { ColorModeMenuInner } from './ColorModeMenuInner';

export const ColorModeMenu: React.FC = () => {
  const { log } = useLogger();

  return <ColorModeMenuInner log={log} />;
};
