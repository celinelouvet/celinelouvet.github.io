import { Box, type BoxProps, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';

import { type Resume } from '@/data';

import { ResumeContent as ResumeAboveLg } from './aboveLg';
import { ResumeContent as ResumeBelowMd } from './belowMd';
import { ResumeContent as ResumeBetweenMdAndLg } from './betweenMdAndLg';
import { ResumeContent as ResumePrint } from './print';

export interface ResumeProps
  extends Omit<BoxProps, 'children'>,
    React.PropsWithChildren<{
      resume: Resume;
    }> {}

export const ResumeLayout = React.forwardRef<HTMLDivElement, ResumeProps>(
  function ResumeLayout(props, ref) {
    const { resume, ...restProps } = props;

    const ResumeContent = useBreakpointValue({
      base: ResumeBelowMd,
      md: ResumeBetweenMdAndLg,
      lg: ResumeAboveLg,
      _print: ResumePrint,
    });

    if (!ResumeContent) {
      return null;
    }

    return (
      <Box ref={ref} {...restProps}>
        <ResumeContent resume={resume} />
      </Box>
    );
  },
);
