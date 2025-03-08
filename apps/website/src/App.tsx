import { BrowserRouter, Route, Routes } from 'react-router';

import { PageContainer } from '@/components/core';
import { Header, Home } from '@/components/features';
import { useResume } from '@/hooks';

function App() {
  const resume = useResume();
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home resume={resume} />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
