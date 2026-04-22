import * as React from 'react';
import { useParams } from 'react-router';

import { PageContainer } from 'src/components/core';
import { Header, Talk as TalkContent } from 'src/components/features';
import { useResume } from 'src/hooks';

export const Talk: React.FC = () => {
  const { talkSubjectId } = useParams();
  const resume = useResume();

  return (
    <>
      <Header />
      <PageContainer>
        <TalkContent resume={resume} talkSubjectId={talkSubjectId} />
      </PageContainer>
    </>
  );
};
