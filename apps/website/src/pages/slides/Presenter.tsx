import * as React from 'react';

import { PageContainer } from 'src/components/core';
import { Header, Presenter as PresenterContent } from 'src/components/features';

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
