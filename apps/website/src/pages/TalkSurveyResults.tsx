import * as React from 'react';
import { useParams } from 'react-router';

import { PageContainer } from 'src/components/core';
import {
  Header,
  TalkSurveyResults as TalkSurveyResultsContent,
} from 'src/components/features';

export const TalkSurveyResults: React.FC = () => {
  const { talkSubjectId, conventionId } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <TalkSurveyResultsContent
          talkSubjectId={talkSubjectId}
          conventionId={conventionId !== 'all' ? conventionId : undefined}
        />
      </PageContainer>
    </>
  );
};
