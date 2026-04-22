import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { DateFormatter, H3Heading } from 'src/components/core';
import type { Education } from 'src/data';

export const EducationHeader: React.FC<{ education: Education }> =
  function EducationHeader({ education }) {
    return (
      <Flex alignItems="baseline" gap="2">
        <H3Heading>{education.school}</H3Heading>

        <DateFormatter type="period" period={education} />
      </Flex>
    );
  };
