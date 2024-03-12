import { ErrorBoundary } from 'react-error-boundary';

import '../../common.css';

import { talkMetadata } from '@/components/slideDecks/highwayToFail';

export const metadata = {
  title: `Notes - ${talkMetadata.title}`,
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
