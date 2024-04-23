import { useRouter } from 'next/router';

import { PageContainer, SurveyPoll } from '@/components/core';
import { highwayToFailSurveyFr as survey } from '@/data/talks';

export default function Page() {
  const router = useRouter();

  console.log(router);
  return (
    <PageContainer>
      <SurveyPoll survey={survey} />
    </PageContainer>
  );
}
