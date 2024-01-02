import { Box, List } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LinkListItem } from '@/components/list';
import { H2Heading } from '@/components/typography';
import { type Social } from '@/data';
import { useHeadingSize } from '@/hooks';
import { socialIcon } from '@/lib';

export type SocialsProps = {
  socials: Social[];
};

export const Socials: FC<SocialsProps> = ({ socials }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'socials' });

  return (
    <Box>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List spacing={1}>
        {socials.map(({ name, handle, link }, index) => (
          <LinkListItem
            key={index}
            icon={socialIcon(name)}
            ariaLabel={name}
            text={`@${handle}`}
            href={link}
          />
        ))}
      </List>
    </Box>
  );
};
