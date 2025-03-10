import * as React from 'react';

import { Resume as ResumeContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Resume: React.FC = () => {
  const resume = useResume();

  return <ResumeContent resume={resume} />;
};
