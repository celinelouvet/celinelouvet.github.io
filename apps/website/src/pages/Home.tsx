import * as React from 'react';

import { Home as HomeContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Home: React.FC = () => {
  const resume = useResume();

  return <HomeContent resume={resume} />;
};
