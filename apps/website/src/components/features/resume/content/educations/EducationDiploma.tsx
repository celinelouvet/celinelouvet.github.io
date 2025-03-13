import { Text } from '@chakra-ui/react';
import * as React from 'react';

import type { Education } from '@/data';

export const EducationDiploma: React.FC<{ education: Education }> = ({
  education,
}) => {
  if (!education.diploma || !education.speciality) {
    return null;
  }

  return (
    <Text>
      {education.diploma} — {education.speciality}
    </Text>
  );
};
