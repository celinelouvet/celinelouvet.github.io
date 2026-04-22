import * as React from 'react';
import { useParams } from 'react-router';

import { PageContainer } from 'src/components/core';
import {
  Header,
  TalkSurveyPoll as TalkSurveyPollContent,
} from 'src/components/features';

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
