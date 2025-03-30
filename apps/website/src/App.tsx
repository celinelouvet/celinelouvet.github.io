import { BrowserRouter, Route, Routes } from 'react-router';

import {
  Home,
  PresenterPage,
  Resume,
  SlidesContentPage,
  SlidesNotesPage,
  SlidesPrintNotesPage,
  SlidesPrintPage,
  Talk,
  Talks,
} from '@/pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/slides/:talkSubjectId/content"
            element={<SlidesContentPage />}
          />
          <Route
            path="/slides/:talkSubjectId/notes"
            element={<SlidesNotesPage />}
          />
          <Route
            path="/slides/:talkSubjectId/print"
            element={<SlidesPrintPage />}
          />
          <Route
            path="/slides/:talkSubjectId/print-notes"
            element={<SlidesPrintNotesPage />}
          />
          <Route path="/slides" element={<PresenterPage />} />
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
