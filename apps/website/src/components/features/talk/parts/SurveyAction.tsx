import { chakra } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'src/components/core';

type SurveyActionProps = {
  name?: string;
  opensAt: string;
  closesAt: string;
  talkLink: string;
};

export const SurveyAction: React.FC<SurveyActionProps> = function SurveyAction({
  name,
  opensAt,
  closesAt,
  talkLink,
}) {
  const { t } = useTranslation('talks', { keyPrefix: 'talk.surveys' });

  const now = new Date();
  const opensAtDate = new Date(opensAt);
  const closesAtDate = new Date(closesAt);

  const surveyLink = `${talkLink}/${name}`;
  const resultLink = `${surveyLink}/results`;

  if (opensAtDate <= now && now <= closesAtDate) {
    return (
      <Link.Internal variant="underline" to={surveyLink}>
        {t('survey')}
      </Link.Internal>
    );
  }

  if (closesAtDate <= now) {
    return (
      <Link.Internal variant="underline" to={resultLink}>
        {t('results')}
      </Link.Internal>
    );
  }

  return <chakra.span>{t('notAvailable')}</chakra.span>;
};
