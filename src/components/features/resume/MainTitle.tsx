import { Box } from '@chakra-ui/react';
import { type FC } from 'react';

import { H1Heading, H2Heading } from '@/components/core';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

type MainTitleProps = {
  resume: Resume;
};

export const MainTitle: FC<MainTitleProps> = ({ resume }) => {
  const size = useHeadingSize();

  const fullname = `${resume.firstname} ${resume.lastname}`;

  return (
    <Box paddingLeft={{ lg: 'summary.space', base: '0' }} color="white">
      <H1Heading size={size}>{fullname}</H1Heading>
      <H2Heading size={size}>{resume.title}</H2Heading>
    </Box>
  );
};
