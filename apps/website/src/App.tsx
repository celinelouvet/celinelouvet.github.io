import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Home, Resume, Talk, Talks } from '@/pages';

const PresenterPage = lazy(() =>
  import('./pages/slides').then((module) => ({
    default: module.PresenterPage,
  })),
);
const SlidesContentPage = lazy(() =>
  import('./pages/slides').then((module) => ({
    default: module.SlidesContentPage,
  })),
);
const SlidesNotesPage = lazy(() =>
  import('./pages/slides').then((module) => ({
    default: module.SlidesNotesPage,
  })),
);
const SlidesPrintNotesPage = lazy(() =>
  import('./pages/slides').then((module) => ({
    default: module.SlidesPrintNotesPage,
  })),
);
const SlidesPrintPage = lazy(() =>
  import('./pages/slides').then((module) => ({
    default: module.SlidesPrintPage,
  })),
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/slides/:talkSubjectId/content"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SlidesContentPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/notes"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SlidesNotesPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/print"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SlidesPrintPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/print-notes"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SlidesPrintNotesPage />
              </Suspense>
            }
          />
          <Route
            path="/slides"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PresenterPage />
              </Suspense>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/talks/:talkSubjectId" element={<Talk />} />
          <Route path="/talks" element={<Talks />}></Route>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
