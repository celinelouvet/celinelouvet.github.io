import * as React from 'react';

import { PageContainer } from 'src/components/core';
import { Header, Home as HomeContent } from 'src/components/features';
import { useResume } from 'src/hooks';

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
