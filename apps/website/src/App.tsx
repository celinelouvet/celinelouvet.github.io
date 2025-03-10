import { BrowserRouter, Route, Routes } from 'react-router';

import { PageContainer } from '@/components/core';
import { Header } from '@/components/features';
import { Home, Resume, Talk, Talks } from '@/pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/talks/:talkSubjectId" element={<Talk />} />
            <Route path="/talks" element={<Talks />}></Route>
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
