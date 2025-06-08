import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { ResumeAboveLg } from './ResumeAboveLg';
import { ResumeBelowLg } from './ResumeBelowLg';

type ResumeProps = {
  resume: Resume;
};

export const ResumeLayout: React.FC<ResumeProps> = function ResumeLayout({
  resume,
}) {
  return (
    <>
      <Box display={{ base: 'block', lg: 'none' }}>
        <ResumeBelowLg resume={resume} />
      </Box>
      <Box display={{ base: 'none', lg: 'block' }}>
        <ResumeAboveLg resume={resume} />
      </Box>
    </>
  );
};
