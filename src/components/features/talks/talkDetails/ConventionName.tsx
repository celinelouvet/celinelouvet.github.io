import { Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { type TalkDetailsProps } from './TalkDetails';

export const ConventionName: FC<TalkDetailsProps> = ({ talk }) => {
  const { name } = talk;

  if (!name) {
    return null;
  }

  return (
    <Text as="span" paddingRight="3">
      {name}
    </Text>
  );
};
