import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, List } from '@/components/core';
import { type Social } from '@/data';
import { socialIcon } from '@/lib';

export type SocialsProps = {
  socials: Social[];
};

export const Socials: React.FC<SocialsProps> = function Socials({ socials }) {
  const { t } = useTranslation('home', { keyPrefix: 'socials' });

  return (
    <Box>
      <H2Heading>{t('title')}</H2Heading>

      <List.Root gap="1" variant="plain">
        {socials.map(({ name, handle, link }, index) => (
          <List.LinkItem
            key={index}
            icon={socialIcon(name)}
            ariaLabel={name}
            text={`@${handle}`}
            href={link}
          />
        ))}
      </List.Root>
    </Box>
  );
};
