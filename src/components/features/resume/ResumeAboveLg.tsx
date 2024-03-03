import { Box, Grid, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { Content } from './content';
import { MainTitle } from './MainTitle';
import { Summary } from './summary';

type ResumeProps = {
  resume: Resume;
};

export const ResumeAboveLg: FC<ResumeProps> = ({ resume }) => {
  const [brandGradient] = useToken('colors', ['brandGradient']);
  const [summaryWidth] = useToken('space', ['summary.space']);

  return (
    <Grid gridTemplateColumns={`[col1] ${summaryWidth} [line2] auto`}>
      <Box
        gridColumn="1 / span 2"
        bgGradient={`linear-gradient(${brandGradient})`}
        padding="6"
      >
        <MainTitle resume={resume} />
      </Box>

      <Summary resume={resume} />
      <Content resume={resume} />
    </Grid>
  );
};
