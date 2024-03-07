import { PageContainer } from '@/components/core';
import { Talks } from '@/components/features/talks';
import { useResume } from '@/hooks';

export default function Page() {
  const resume = useResume();

  return (
    <PageContainer>
      <Talks resume={resume} />
    </PageContainer>
  );
}
