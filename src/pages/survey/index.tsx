import { PageContainer, SurveyPoll } from '@/components/core';
import { highwayToFailSurveyFr as survey } from '@/data/talks';

export default function Page() {
  return (
    <PageContainer>
      <SurveyPoll survey={survey} />
    </PageContainer>
  );
}
