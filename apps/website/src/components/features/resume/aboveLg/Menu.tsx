import { Button, Stack, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Resume } from 'src/data';

type MenuProps = {
  resume: Resume;
  onClick: (id: string) => void;
};

export const Menu: React.FC<MenuProps> = function Menu({ resume, onClick }) {
  const { t } = useTranslation('resume', { keyPrefix: 'menu' });

  const links = linksContent({ resume });

  return (
    <Stack
      rowGap="0"
      alignItems="stretch"
      borderLeftRadius="md"
      backgroundColor={{ base: 'brand.700', _dark: 'brand.300' }}
    >
      <chakra.span
        fontSize="md"
        padding="2.5"
        textAlign="right"
        verticalAlign="middle"
      >
        Navigation
      </chakra.span>
      {links.map((id) => (
        <Button
          key={id}
          variant="subtle"
          size="xs"
          onClick={() => onClick(id)}
          justifyContent="flex-end"
          borderRadius="none"
          borderBottomLeftRadius={
            id === links[links.length - 1] ? 'md' : 'none'
          }
        >
          {t(id)}
        </Button>
      ))}
    </Stack>
  );
};

type LinksContent = {
  resume: Resume;
};

function linksContent({ resume }: LinksContent): string[] {
  const {
    descriptions,
    experiences,
    talks,
    podcasts,
    educations,
    trainings,
    certifications,
    volunteering,
  } = resume;
  const linksArray: string[] = [];
  if (descriptions.length > 0) linksArray.push('descriptions');
  if (experiences.length > 0) linksArray.push('experiences');
  if (talks.length > 0) linksArray.push('talks');
  if (podcasts.length > 0) linksArray.push('podcasts');
  if (educations.length > 0) linksArray.push('educations');
  if (trainings.length > 0) linksArray.push('trainings');
  if (certifications.length > 0) linksArray.push('certifications');
  if (volunteering.length > 0) linksArray.push('volunteering');
  return linksArray;
}
