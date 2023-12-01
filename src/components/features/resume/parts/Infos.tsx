import { List, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BsBicycle,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsGlobe,
  BsHourglassSplit,
} from 'react-icons/bs';

import '@/lib/dayjs/config';

import { LinkListItem, TextListItem } from '@/components/list';
import { H2Heading } from '@/components/typography';
import { type Resume } from '@/data';
import { useHeadingSize } from '@/hooks';

type InfosProps = {
  resume: Resume;
};

export const Infos: FC<InfosProps> = ({ resume }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'infos' });

  const websiteName = resume.website.replace('https://', '');
  const experience = dayjs(resume.firstExperience).fromNow(true);

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      <List>
        <LinkListItem
          icon={BsEnvelopeFill}
          ariaLabel={t('email')}
          text={resume.email}
          href={`mailto:${resume.email}`}
        />

        <LinkListItem
          icon={BsGlobe}
          ariaLabel={t('website')}
          text={websiteName}
          href={resume.website}
        />

        <TextListItem
          icon={BsGeoAltFill}
          ariaLabel={t('location')}
          text={`${resume.location} (${resume.zipCode})`}
        />

        <TextListItem
          icon={BsHourglassSplit}
          ariaLabel={t('experience')}
          text={t('yearsOfExperience', { experience })}
        />

        <TextListItem
          icon={BsBicycle}
          ariaLabel={t('hobbies')}
          text={resume.hobbies}
        />
      </List>
    </Stack>
  );
};
