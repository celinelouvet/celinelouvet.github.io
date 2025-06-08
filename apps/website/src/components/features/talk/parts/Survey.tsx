import { HStack, chakra } from '@chakra-ui/react';
import type * as React from 'react';

import { List } from '@/components/core';

import { SurveyAction } from './SurveyAction';

type SurveyProps = {
  name?: string;
  opensAt: string;
  closesAt: string;
  talkLink: string;
};

export const Survey: React.FC<SurveyProps> = function Survey({
  name,
  opensAt,
  closesAt,
  talkLink,
}) {
  return (
    <List.Item>
      <HStack alignItems="baseline">
        <chakra.span minWidth="chakra.span">{name}</chakra.span>

        <SurveyAction
          name={name}
          opensAt={opensAt}
          closesAt={closesAt}
          talkLink={talkLink}
        />
      </HStack>
    </List.Item>
  );
};
