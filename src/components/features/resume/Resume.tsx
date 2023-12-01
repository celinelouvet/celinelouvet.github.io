import { Box, Grid } from '@chakra-ui/react';
import { type FC } from 'react';

import { pictureInPx } from '@/components/media';
import { type Resume } from '@/data';

import { Content } from './Content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumeProps = {
  resume: Resume;
};

const summarySize = pictureInPx * 1.75;

export const ResumeLayout: FC<ResumeProps> = ({ resume }) => {
  return (
    <Grid
      gridTemplateColumns={{
        md: `[col1] ${summarySize}px [line2] auto`,
        base: `100%`,
      }}
    >
      <Box gridColumn="1 / span 2" __css={mainTitleStyle}>
        <MainTitle resume={resume} />
      </Box>
      <Summary resume={resume} />
      <Content resume={resume} />
    </Grid>
  );
};

const brand100_rgb = '42, 89, 120';

const mainTitleStyle = {
  backgroundImage: `linear-gradient(180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%)`,
  padding: '6',
};
