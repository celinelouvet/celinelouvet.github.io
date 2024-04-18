import { useRouter } from 'next/router';

import { PageContainer, SurveyPoll } from '@/components/core';
import { highwayToFailSurvey } from '@/components/slideDecks/highwayToFail';

export default function Page() {
  const router = useRouter();

  console.log(router);
  return (
    <PageContainer>
      <SurveyPoll survey={highwayToFailSurvey} />
    </PageContainer>
  );
}
