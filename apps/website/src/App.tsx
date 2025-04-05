import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Loading } from './components/features';

const HomePage = lazy(() =>
  import('@/pages').then((module) => ({
    default: module.Home,
  })),
);
const PresenterPage = lazy(() =>
  import('@/pages/slides').then((module) => ({
    default: module.PresenterPage,
  })),
);
const ResumePage = lazy(() =>
  import('@/pages').then((module) => ({
    default: module.Resume,
  })),
);
const SlidesContentPage = lazy(() =>
  import('@/pages/slides').then((module) => ({
    default: module.SlidesContentPage,
  })),
);
const SlidesNotesPage = lazy(() =>
  import('@/pages/slides').then((module) => ({
    default: module.SlidesNotesPage,
  })),
);
const SlidesPrintNotesPage = lazy(() =>
  import('@/pages/slides').then((module) => ({
    default: module.SlidesPrintNotesPage,
  })),
);
const SlidesPrintPage = lazy(() =>
  import('@/pages/slides').then((module) => ({
    default: module.SlidesPrintPage,
  })),
);
const TalkPage = lazy(() =>
  import('@/pages').then((module) => ({
    default: module.Talk,
  })),
);
const TalksPage = lazy(() =>
  import('@/pages').then((module) => ({
    default: module.Talks,
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
              <Suspense fallback={<Loading />}>
                <SlidesContentPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/notes"
            element={
              <Suspense fallback={<Loading />}>
                <SlidesNotesPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/print"
            element={
              <Suspense fallback={<Loading />}>
                <SlidesPrintPage />
              </Suspense>
            }
          />
          <Route
            path="/slides/:talkSubjectId/print-notes"
            element={
              <Suspense fallback={<Loading />}>
                <SlidesPrintNotesPage />
              </Suspense>
            }
          />
          <Route
            path="/slides"
            element={
              <Suspense fallback={<Loading />}>
                <PresenterPage />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<Loading />}>
                <ResumePage />
              </Suspense>
            }
          />
          <Route
            path="/talks/:talkSubjectId"
            element={
              <Suspense fallback={<Loading />}>
                <TalkPage />
              </Suspense>
            }
          />
          <Route
            path="/talks"
            element={
              <Suspense fallback={<Loading />}>
                <TalksPage />
              </Suspense>
            }
          ></Route>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
