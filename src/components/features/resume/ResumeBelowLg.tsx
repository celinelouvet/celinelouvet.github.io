import { Box, Stack } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { Content } from './content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumeProps = {
  resume: Resume;
};

export const ResumeBelowLg: FC<ResumeProps> = ({ resume }) => {
  return (
    <Stack>
      <Box __css={mainTitleStyle}>
        <MainTitle resume={resume} />
      </Box>

      <Summary resume={resume} />
      <Content resume={resume} />
    </Stack>
  );
};

const brand100_rgb = '42, 89, 120';

const mainTitleStyle = {
  backgroundImage: `linear-gradient(180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%)`,
  padding: '6',
};
