import * as React from 'react';

import { PageContainer } from 'src/components/core';
import { Header, Talks as TalksContent } from 'src/components/features';
import { useResume } from 'src/hooks';

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
