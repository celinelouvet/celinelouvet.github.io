import { Text } from '@chakra-ui/react';
import * as React from 'react';

import type { Education } from '@/data';

export const EducationFullname: React.FC<{ education: Education }> = ({
  education,
}) => {
  if (!education.fullname) {
    return null;
  }

  return <Text>{education.fullname}</Text>;
};
