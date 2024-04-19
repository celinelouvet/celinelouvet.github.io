import { PageContainer, SurveyResults } from '@/components/core';
import { highwayToFailSurveyFr as survey } from '@/data/talks';

export default function Page() {
  return (
    <PageContainer>
      <SurveyResults survey={survey} />
    </PageContainer>
  );
}
