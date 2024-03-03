import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H2Heading, H3Heading } from '@/components/core';
import { type Certification } from '@/data';
import { useHeadingSize } from '@/hooks';

export type CertificationsProps = {
  certifications: Certification[];
};

export const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'certifications' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {certifications.map((certification) => (
        <Box key={certification.topic}>
          <CertificationContent certification={certification} />
        </Box>
      ))}
    </Stack>
  );
};

const CertificationHeader: FC<{ certification: Certification }> = ({
  certification,
}) => {
  const size = useHeadingSize();

  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading size={size}>{certification.topic}</H3Heading>
      <DateText when={certification.when} dateFormat="MMM YYYY" />
    </Flex>
  );
};

const CertificationContent: FC<{ certification: Certification }> = ({
  certification,
}) => {
  return (
    <Flex direction="column">
      <CertificationHeader certification={certification} />
      <Text>{certification.company}</Text>
    </Flex>
  );
};
