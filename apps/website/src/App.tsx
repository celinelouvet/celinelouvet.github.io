import { PageContainer } from '@/components/core';
import { Header, Home } from '@/components/features';
import { useResume } from '@/hooks';

function App() {
  const resume = useResume();
  return (
    <>
      <Header />
      <PageContainer>
        <Home resume={resume} />
      </PageContainer>
    </>
  );
}

export default App;
