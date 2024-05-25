import { Text } from '@chakra-ui/react';

import {
  Failure,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Failure variant="slide" title="Les investisseurs">
      Revenez après avoir généré du chiffre d’affaires
    </Failure>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Et là, le couperet : Les investisseurs nous disent de revenir après avoir
      généré du chiffre d’affaires
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
