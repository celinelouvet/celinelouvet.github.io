import * as React from 'react';

import { PageContainer } from '@/components/core';
import { Header, Resume as ResumeContent } from '@/components/features';
import { useIsPrint, useResume } from '@/hooks';

export const Resume: React.FC = () => {
  const resume = useResume();

  const isPrint = useIsPrint();

  if (isPrint) {
    return <ResumeContent resume={resume} />;
  }

  return (
    <>
      <Header />
      <PageContainer>
        <ResumeContent resume={resume} />
      </PageContainer>
    </>
  );
};
