import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume } from '@/data';

import { PodcastList } from './PodcastList';

export type PodcastsProps = {
  resume: Resume;
};

export const Podcasts: React.FC<PodcastsProps> = function Podcasts({ resume }) {
  const { t } = useTranslation('home', { keyPrefix: 'podcasts' });

  const { podcasts } = resume;

  return <PodcastList podcasts={podcasts} title={t('title')} maxShow={2} />;
};
