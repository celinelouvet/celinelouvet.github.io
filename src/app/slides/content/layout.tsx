import { ErrorBoundary } from 'react-error-boundary';

import '../../common.css';

import { talkMetadata } from '@/components/slideDecks/highwayToFail';

export const metadata = {
  title: talkMetadata.title,
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
