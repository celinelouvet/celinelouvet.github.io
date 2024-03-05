import { PageContainer } from '@/components/core';
import { Home } from '@/components/features/home';
import { useResume } from '@/hooks';

export default function Page() {
  const resume = useResume();

  return (
    <PageContainer>
      <Home resume={resume} />
    </PageContainer>
  );
}
