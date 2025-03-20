import * as React from 'react';

import { PageContainer } from '@/components/core';
import { Header, Resume as ResumeContent } from '@/components/features';
import { useResume } from '@/hooks';

export const Resume: React.FC = () => {
  const resume = useResume();

  return (
    <>
      <Header />
      <PageContainer>
        <ResumeContent resume={resume} />
      </PageContainer>
    </>
  );
};
