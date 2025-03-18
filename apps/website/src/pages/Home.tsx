import * as React from 'react';

import { PageContainer } from '@/components/core';
import { Header, Home as HomeContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Home: React.FC = () => {
  const resume = useResume();

  return (
    <>
      <Header />
      <PageContainer>
        <HomeContent resume={resume} />
      </PageContainer>
    </>
  );
};
