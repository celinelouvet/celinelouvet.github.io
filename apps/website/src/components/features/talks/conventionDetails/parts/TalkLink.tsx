import { useTranslation } from 'react-i18next';

import { Link } from '@/components/core';
import type { Links } from '@/data';

type LinksType = keyof Links;

type TalkLinkProps = {
  type: LinksType;
  links?: Links;
};

export const TalkLink: React.FC<TalkLinkProps> = function TalkLink(props) {
  const { type, links } = props;

  const { t } = useTranslation('talks', { keyPrefix: 'links' });

  if (!links || !links[type]) {
    return null;
  }

  return <Link.External href={links[type]}>{t(type)}</Link.External>;
};
