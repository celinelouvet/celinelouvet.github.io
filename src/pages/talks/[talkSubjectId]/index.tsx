import { useRouter } from 'next/router';

import { PageContainer } from '@/components/core';
import { Talk } from '@/components/features/talk';
import { useResume } from '@/hooks';

export default function Page() {
  const resume = useResume();
  const router = useRouter();
  const talkSubjectId = router.query.talkSubjectId;

  return (
    <PageContainer>
      <Talk resume={resume} talkSubjectId={talkSubjectId} />
    </PageContainer>
  );
}
