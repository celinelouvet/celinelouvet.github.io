import { Box, Grid, useToken } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { Content } from './Content';
import { MainTitle } from './MainTitle';
import { Summary } from './Summary';

type ResumeContentProps = {
  resume: Resume;
};

export const ResumeContent: React.FC<ResumeContentProps> =
  function ResumeContent({ resume }) {
    const [summaryWidth] = useToken('space', ['summary.space']);

    return (
      <Grid
        gridTemplateColumns={`[col1] ${summaryWidth} [line2] auto`}
        columnGap="6"
        padding="6"
      >
        <Box gridColumn="1 / span 2" bgGradient="brand" padding="6">
          <MainTitle resume={resume} />
        </Box>

        <Summary resume={resume} height="100%" />
        <Content resume={resume} />
      </Grid>
    );
  };
