import * as React from 'react';

import { PageContainer } from '@/components/core';
import { Header, Talks as TalksContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Talks: React.FC = () => {
  const resume = useResume();

  return (
    <>
      <Header />
      <PageContainer>
        <TalksContent resume={resume} />
      </PageContainer>
    </>
  );
};
