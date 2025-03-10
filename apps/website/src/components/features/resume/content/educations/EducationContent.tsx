import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import type { Education } from '@/data';

import { EducationDiploma } from './EducationDiploma';
import { EducationFullname } from './EducationFullname';
import { EducationHeader } from './EducationHeader';

export const EducationContent: React.FC<{ education: Education }> = ({
  education,
}) => {
  return (
    <Flex direction="column">
      <EducationHeader education={education} />
      <EducationFullname education={education} />
      <EducationDiploma education={education} />
    </Flex>
  );
};
