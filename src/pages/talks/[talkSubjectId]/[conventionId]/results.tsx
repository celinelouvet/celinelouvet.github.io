import { useRouter } from 'next/router';

import { PageContainer, SurveyResults } from '@/components/core';

export default function Page() {
  const router = useRouter();
  const { talkSubjectId, conventionId } = router.query;

  return (
    <PageContainer>
      <SurveyResults
        talkSubjectId={talkSubjectId}
        conventionId={conventionId}
      />
    </PageContainer>
  );
}
