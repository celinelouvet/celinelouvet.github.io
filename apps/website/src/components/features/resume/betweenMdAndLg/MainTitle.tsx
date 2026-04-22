import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { H1Heading, H2Heading } from 'src/components/core';
import { type Resume } from 'src/data';

type MainTitleProps = {
  resume: Resume;
};

export const MainTitle: React.FC<MainTitleProps> = function MainTitle({
  resume,
}) {
  const fullname = `${resume.firstname} ${resume.lastname}`;

  return (
    <Box color="white">
      <H1Heading>{fullname}</H1Heading>
      <H2Heading>{resume.title}</H2Heading>
    </Box>
  );
};
