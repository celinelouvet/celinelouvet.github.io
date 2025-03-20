import { chakra } from '@chakra-ui/react';
import * as React from 'react';

import { type TalkDetailsProps } from './TalkDetails';

export const ConventionName: React.FC<TalkDetailsProps> = ({ talk }) => {
  const { name } = talk;

  if (!name) {
    return null;
  }

  return <chakra.span paddingRight="3">{name}</chakra.span>;
};
