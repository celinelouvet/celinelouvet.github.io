import { PageContainer, SurveyResults } from '@/components/core';
import { highwayToFailSurvey } from '@/components/slideDecks/highwayToFail';

export default function Page() {
  return (
    <PageContainer>
      <SurveyResults survey={highwayToFailSurvey} />
    </PageContainer>
  );
}
