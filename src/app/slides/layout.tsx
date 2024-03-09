import { ErrorBoundary } from 'react-error-boundary';

export const metadata = {
  title: 'Slides',
};

export default function SlidesLayout({
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
