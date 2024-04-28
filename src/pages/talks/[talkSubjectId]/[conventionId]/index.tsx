import { useRouter } from 'next/router';

import { PageContainer, SurveyPoll } from '@/components/core';

export default function Page() {
  const router = useRouter();
  const { talkSubjectId, conventionId } = router.query;

  return (
    <PageContainer>
      <SurveyPoll talkSubjectId={talkSubjectId} conventionId={conventionId} />
    </PageContainer>
  );
}
