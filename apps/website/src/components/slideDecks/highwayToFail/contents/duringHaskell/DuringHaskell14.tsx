import { Code, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell — Dans la réalité"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack>
      <Code width="100%" variant="slide" fontSize="0.7em">
        <Stack fontFamily="noto mono" gap="0.5em">
          <Text as="span">
            getUser :: Pool Connection → SessionUser → UserId → Handler User
          </Text>
          <Text as="span">getUser pool sessionUser uId = do</Text>
          <Text as="span">
              userIsAdmin sessionUser &gt;&gt;= maybeAdminForbidden
          </Text>
          <Text as="span">  maybeGetUser pool uId &gt;&gt;= maybeNotFound</Text>
        </Stack>
      </Code>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>À faire</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
