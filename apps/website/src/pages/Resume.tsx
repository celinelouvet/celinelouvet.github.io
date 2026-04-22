import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { PageContainer } from 'src/components/core';
import { Header, Resume as ResumeContent } from 'src/components/features';
import { useResume } from 'src/hooks';

export type ResumePageProps = Omit<BoxProps, 'children'>;

export const ResumePage = React.forwardRef<HTMLDivElement, BoxProps>(
  function ResumePage(props, ref) {
    const resume = useResume();

    return (
      <Box ref={ref} {...props}>
        <Header />
        <PageContainer>
          <ResumeContent resume={resume} />
        </PageContainer>
      </Box>
    );
  },
);
