import { Box, List, ListItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SocialLink } from '@/components/navigation';
import { H2Heading } from '@/components/typography';
import { type Social } from '@/data';

export type SocialsProps = {
  socials: Social[];
};

export const Socials: FC<SocialsProps> = ({ socials }) => {
  const { t } = useTranslation('home', { keyPrefix: 'socials' });

  return (
    <Box>
      <H2Heading>{t('title')}</H2Heading>
      <List spacing={1}>
        {socials.map((social, index) => (
          <ListItem key={index}>
            <SocialLink social={social} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
