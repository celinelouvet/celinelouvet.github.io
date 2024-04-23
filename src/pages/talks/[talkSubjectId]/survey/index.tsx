import { useRouter } from 'next/router';

import { PageContainer, SurveyPoll } from '@/components/core';
import { highwayToFailSurveyFr as survey } from '@/data/talks';

export default function Page() {
  const router = useRouter();
  const talkSubjectId = router.query.talkSubjectId;

  return (
    <PageContainer>
      <SurveyPoll survey={survey} talkSubjectId={talkSubjectId} />
    </PageContainer>
  );
}
