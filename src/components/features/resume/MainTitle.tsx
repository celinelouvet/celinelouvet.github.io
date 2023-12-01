import { Box } from '@chakra-ui/react';
import { type FC } from 'react';

import { pictureInPx } from '@/components/media';
import { H1Heading, H2Heading } from '@/components/typography';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

type MainTitleProps = {
  resume: Resume;
};

const summarySize = pictureInPx * 1.75;

export const MainTitle: FC<MainTitleProps> = ({ resume }) => {
  const size = useHeadingSize();

  const fullname = `${resume.firstname} ${resume.lastname}`;

  return (
    <Box paddingLeft={`${summarySize}px`} color="white">
      <H1Heading size={size}>{fullname}</H1Heading>
      <H2Heading size={size}>{resume.title}</H2Heading>
    </Box>
  );
};
