import { Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BsBicycle,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsGlobe,
  BsHourglassSplit,
} from 'react-icons/bs';

import '@/lib/dayjs/config';

import { H2Heading, List } from '@/components/core';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

type InfosProps = {
  resume: Resume;
};

export const Infos: React.FC<InfosProps> = ({ resume }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'infos' });

  const websiteName = resume.website.replace('https://', '');
  const experience = dayjs(resume.firstExperience).fromNow(true);

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List.Root variant="plain">
        <List.LinkItem
          icon={BsEnvelopeFill}
          ariaLabel={t('email')}
          text={resume.email}
          href={`mailto:${resume.email}`}
        />

        <List.LinkItem
          icon={BsGlobe}
          ariaLabel={t('website')}
          text={websiteName}
          href={resume.website}
        />

        <List.TextItem
          icon={BsGeoAltFill}
          ariaLabel={t('location')}
          text={`${resume.location} (${resume.zipCode})`}
        />

        <List.TextItem
          icon={BsHourglassSplit}
          ariaLabel={t('experience')}
          text={t('yearsOfExperience', { experience })}
        />

        <List.TextItem
          icon={BsBicycle}
          ariaLabel={t('hobbies')}
          text={resume.hobbies}
        />
      </List.Root>
    </Stack>
  );
};
