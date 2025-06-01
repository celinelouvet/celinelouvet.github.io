import { useTranslation } from 'react-i18next';

import { Link } from '@/components/core';
import type { Links } from '@/data';

type LinksType = keyof Links;

type PodcastLinkProps = {
  type: LinksType;
  links?: Links;
};

export const PodcastLink: React.FC<PodcastLinkProps> = function PodcastLink(
  props,
) {
  const { type, links } = props;

  const { t } = useTranslation('talks', { keyPrefix: 'links' });

  if (!links || !links[type]) {
    return null;
  }

  return <Link.External href={links[type]}>{t(type)}</Link.External>;
};
