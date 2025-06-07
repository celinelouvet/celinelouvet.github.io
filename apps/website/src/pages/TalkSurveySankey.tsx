import * as React from 'react';
import { useParams } from 'react-router';

import { PageContainer } from '@/components/core';
import {
  Header,
  TalkSurveySankey as TalkSurveySankeyContent,
} from '@/components/features';

export const TalkSurveySankey: React.FC = () => {
  const { talkSubjectId, conventionId } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <TalkSurveySankeyContent
          talkSubjectId={talkSubjectId}
          conventionId={conventionId !== 'all' ? conventionId : undefined}
        />
      </PageContainer>
    </>
  );
};
