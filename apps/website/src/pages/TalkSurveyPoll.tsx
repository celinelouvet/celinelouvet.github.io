import * as React from 'react';
import { useParams } from 'react-router';

import { PageContainer } from '@/components/core';
import {
  Header,
  TalkSurveyPoll as TalkSurveyPollContent,
} from '@/components/features';

export const TalkSurveyPoll: React.FC = () => {
  const { talkSubjectId, conventionId } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <TalkSurveyPollContent
          talkSubjectId={talkSubjectId}
          conventionId={conventionId}
        />
      </PageContainer>
    </>
  );
};
