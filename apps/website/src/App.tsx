import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Loading } from './components/features';

const HomePage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.Home,
  })),
);
const PresenterPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.PresenterPage,
  })),
);
const ResumePage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.ResumePage,
  })),
);
const ResumePrintPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.ResumePrintPage,
  })),
);
const SlidesContentPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.SlidesContentPage,
  })),
);
const SlidesSurveyResultsPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.SlidesSurveyResultsPage,
  })),
);
const SlidesNotesPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.SlidesNotesPage,
  })),
);
const SlidesPrintNotesPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.SlidesPrintNotesPage,
  })),
);
const SlidesPrintPage = lazy(() =>
  import('src/pages/slides').then((module) => ({
    default: module.SlidesPrintPage,
  })),
);
const TalkPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.Talk,
  })),
);
const TalkSurveyPollPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.TalkSurveyPoll,
  })),
);
const TalkSurveyResultsPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.TalkSurveyResults,
  })),
);
const TalkSurveySankeyPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.TalkSurveySankey,
  })),
);
const TalksPage = lazy(() =>
  import('src/pages').then((module) => ({
    default: module.Talks,
  })),
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/slides">
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <PresenterPage />
                </Suspense>
              }
            />

            <Route path=":talkSubjectId">
              <Route
                path="content"
                element={
                  <Suspense fallback={<Loading />}>
                    <SlidesContentPage />
                  </Suspense>
                }
              />

              <Route
                path="results/:conventionId"
                element={
                  <Suspense fallback={<Loading />}>
                    <SlidesSurveyResultsPage />
                  </Suspense>
                }
              />

              <Route
                path="notes"
                element={
                  <Suspense fallback={<Loading />}>
                    <SlidesNotesPage />
                  </Suspense>
                }
              />
              <Route
                path="print"
                element={
                  <Suspense fallback={<Loading />}>
                    <SlidesPrintPage />
                  </Suspense>
                }
              />
              <Route
                path="print-notes"
                element={
                  <Suspense fallback={<Loading />}>
                    <SlidesPrintNotesPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route path="/resume">
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <ResumePage />
                </Suspense>
              }
            />
            <Route
              path="print/:language"
              element={
                <Suspense fallback={<Loading />}>
                  <ResumePrintPage />
                </Suspense>
              }
            />
          </Route>

          <Route path="/talks">
            <Route path=":talkSubjectId">
              <Route path=":conventionId">
                <Route
                  path="results"
                  element={
                    <Suspense fallback={<Loading />}>
                      <TalkSurveyResultsPage />
                    </Suspense>
                  }
                />
                <Route
                  path="sankey"
                  element={
                    <Suspense fallback={<Loading />}>
                      <TalkSurveySankeyPage />
                    </Suspense>
                  }
                />
                <Route
                  index
                  element={
                    <Suspense fallback={<Loading />}>
                      <TalkSurveyPollPage />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <TalkPage />
                  </Suspense>
                }
              />
            </Route>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <TalksPage />
                </Suspense>
              }
            ></Route>
          </Route>

          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/voxxedlux"
            element={
              <Navigate to="/talks/highway_to_fail/voxxedlux_2025" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
