import { useMediaQuery, useToken } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';
import { useIsPrint } from '@/hooks';

import { ResumeAboveLg } from './ResumeAboveLg';
import { ResumeBelowLg } from './ResumeBelowLg';
import { ResumePrint } from './ResumePrint';

type ResumeProps = {
  resume: Resume;
};

export const ResumeLayout: React.FC<ResumeProps> = function ResumeLayout({
  resume,
}) {
  const isPrint = useIsPrint();

  const [lg] = useToken('breakpoints', ['lg']);

  const [aboveLg] = useMediaQuery([`(min-width: ${lg})`]);
  if (isPrint) {
    return <ResumePrint resume={resume} />;
  }
  if (aboveLg) {
    return <ResumeAboveLg resume={resume} />;
  }
  return <ResumeBelowLg resume={resume} />;
};
