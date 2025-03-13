import * as React from 'react';

import { Talks as TalksContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Talks: React.FC = () => {
  const resume = useResume();

  return <TalksContent resume={resume} />;
};
