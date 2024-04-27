import { useRouter } from 'next/router';

import { PageContainer, SurveyResults } from '@/components/core';
import { highwayToFailSurveyFr as survey } from '@/data/talks';

export default function Page() {
  const router = useRouter();
  const talkSubjectId = router.query.talkSubjectId;
  return (
    <PageContainer>
      <SurveyResults survey={survey} talkSubjectId={talkSubjectId} />
    </PageContainer>
  );
}
