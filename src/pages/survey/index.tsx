import { PageContainer, SurveyPoll } from '@/components/core';
import { highwayToFailSurvey } from '@/components/slideDecks/highwayToFail';

export default function Page() {
  return (
    <PageContainer>
      <SurveyPoll survey={highwayToFailSurvey} />
    </PageContainer>
  );
}
