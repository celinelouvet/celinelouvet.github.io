import { PageContainer } from '@/components/core';
import { Resume as ResumeLayout } from '@/components/features/resume';
import { useResume } from '@/hooks';

export default function Page() {
  const resume = useResume();

  return (
    <PageContainer>
      <ResumeLayout resume={resume} />
    </PageContainer>
  );
}
