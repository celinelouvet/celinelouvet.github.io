import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume } from '@/data';
import { useGroupByConventions } from '@/hooks';

import { ConventionList } from './ConventionList';

export type ConventionsProps = {
  resume: Resume;
};

export const Conventions: React.FC<ConventionsProps> = function Conventions({
  resume,
}) {
  const { alreadyDoneConventions, comingConventions } =
    useGroupByConventions(resume);

  const { t } = useTranslation('home', { keyPrefix: 'talks' });

  return (
    <>
      <ConventionList
        conventions={comingConventions}
        title={t('toCome')}
        maxShow={5}
      />
      <ConventionList
        conventions={alreadyDoneConventions}
        title={t('alreadyDone')}
        maxShow={2}
      />
    </>
  );
};
