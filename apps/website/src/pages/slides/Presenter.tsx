import * as React from 'react';

import { PageContainer } from '@/components/core';
import { Header, Presenter as PresenterContent } from '@/components/features';

export const Presenter: React.FC = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <PresenterContent />
      </PageContainer>
    </>
  );
};
