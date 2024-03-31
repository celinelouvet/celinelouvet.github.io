import { ErrorBoundary } from 'react-error-boundary';

import '../../common.css';

export const metadata = {
  title: 'Conf name',
};

export default function SlideContentLayout({
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
