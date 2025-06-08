import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { H3Heading, PeriodText } from '@/components/core';
import type { Education } from '@/data';
import { useHeadingSize } from '@/hooks';

export const EducationHeader: React.FC<{ education: Education }> =
  function EducationHeader({ education }) {
    const size = useHeadingSize();

    return (
      <Flex alignItems="baseline" gap="2">
        <H3Heading size={size}>{education.school}</H3Heading>
        <PeriodText period={education} />
      </Flex>
    );
  };
