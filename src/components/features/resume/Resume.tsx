import { Show, useToken } from '@chakra-ui/react';
import { type FC } from 'react';

import { type Resume } from '@/data';

import { ResumeAboveLg } from './ResumeAboveLg';
import { ResumeBelowLg } from './ResumeBelowLg';

type ResumeProps = {
  resume: Resume;
};

export const ResumeLayout: FC<ResumeProps> = ({ resume }) => {
  const [lg] = useToken('breakpoints', ['lg']);

  return (
    <>
      <Show breakpoint={`(max-width: ${lg})`}>
        <ResumeBelowLg resume={resume} />
      </Show>
      <Show breakpoint={`(min-width: ${lg})`}>
        <ResumeAboveLg resume={resume} />
      </Show>
    </>
  );
};
