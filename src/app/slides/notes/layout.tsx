import { ErrorBoundary } from 'react-error-boundary';

import '../../common.css';

export const metadata = {
  title: 'Notes - Conf name',
};

export default function SlideNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary fallback={<h1>An error occured</h1>}>
      {children}
    </ErrorBoundary>
  );
}
