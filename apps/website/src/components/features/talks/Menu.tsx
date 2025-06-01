import { Box, Button, Wrap } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  type ConventionWithTalks,
  type Podcast,
  type TalkSubject,
} from '@/data';

type MenuProps = {
  subjects: Map<string, TalkSubject>;
  comingConventions: ConventionWithTalks[];
  alreadyDoneConventions: ConventionWithTalks[];
  podcasts: Podcast[];
  onClick: (id: string) => void;
};

export const Menu: React.FC<MenuProps> = ({
  subjects,
  comingConventions,
  alreadyDoneConventions,
  podcasts,
  onClick,
}) => {
  const { t } = useTranslation('talks');

  const links = linksContent({
    subjects,
    comingConventions,
    alreadyDoneConventions,
    podcasts,
  });

  return (
    <Box>
      <Wrap gap="6" justify="center">
        {links.map((id) => (
          <Button
            key={id}
            variant="outline"
            size="sm"
            onClick={() => onClick(id)}
          >
            {t(id)}
          </Button>
        ))}
      </Wrap>
    </Box>
  );
};

type LinksContent = {
  subjects: Map<string, TalkSubject>;
  comingConventions: ConventionWithTalks[];
  alreadyDoneConventions: ConventionWithTalks[];
  podcasts: Podcast[];
};

const linksContent = ({
  subjects,
  comingConventions,
  alreadyDoneConventions,
  podcasts,
}: LinksContent): string[] => {
  const linksArray: string[] = [];
  if (subjects.size > 0) linksArray.push('subjects');
  if (comingConventions.length > 0) linksArray.push('toCome');
  if (alreadyDoneConventions.length > 0) linksArray.push('alreadyDone');
  if (podcasts.length > 0) linksArray.push('podcasts');
  return linksArray;
};
