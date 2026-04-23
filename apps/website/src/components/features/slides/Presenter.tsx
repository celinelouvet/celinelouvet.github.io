import {
  Button,
  ButtonGroup,
  Card,
  Center,
  Flex,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import * as React from 'react';

import { H2Heading, Link, PageContainer } from 'src/components/core';
import { useColorMode } from 'src/components/ui';

type TalkPresenterProps = {
  title: string;
  talkId: string;
  surveyId?: string;
  onClick: (talkId: string, withNotes: boolean) => void;
};

export const TalkPresenter: React.FC<TalkPresenterProps> =
  function TalkPresenter({ title, talkId, surveyId, onClick }) {
    return (
      <>
        <Card.Root variant="primary-subtle">
          <Card.Header>
            <H2Heading>{title}</H2Heading>
          </Card.Header>

          <Card.Body>
            <Wrap rowGap="8" columnGap="32" justify="center">
              <Center>
                <ButtonGroup gap="8">
                  <Button onClick={() => onClick(talkId, false)}>
                    Present
                  </Button>
                  <Button onClick={() => onClick(talkId, true)}>
                    Present with notes
                  </Button>
                </ButtonGroup>
              </Center>

              <Center>
                <ButtonGroup gap="8">
                  <Link.Internal to={`/slides/${talkId}/print`}>
                    Print content
                  </Link.Internal>
                  <Link.Internal to={`/slides/${talkId}/print-notes`}>
                    Print content with notes
                  </Link.Internal>
                </ButtonGroup>
              </Center>

              {surveyId ? (
                <Center>
                  <ButtonGroup gap="8">
                    <Link.Internal to={`/slides/${talkId}/results/${surveyId}`}>
                      Results
                    </Link.Internal>
                  </ButtonGroup>
                </Center>
              ) : null}
            </Wrap>
          </Card.Body>
        </Card.Root>
      </>
    );
  };

export const Presenter: React.FC = function Presenter() {
  const { colorMode } = useColorMode();

  function onClick(talkId: string, withNotes: boolean) {
    window.open(`/slides/${talkId}/content`, '_blank');

    if (withNotes) {
      setTimeout(() => {
        window.open(`/slides/${talkId}/notes`, '_blank');
      }, 500);
    }
  }
  return (
    <PageContainer>
      <Stack
        width="100%"
        minHeight="50vh"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {colorMode !== 'light' ? (
          <Flex alignItems="baseline" gap="8">
            <Text>{colorMode}</Text>
            <Text color="red">Change color mode</Text>
          </Flex>
        ) : null}

        <Stack gap="8" width="100%">
          <TalkPresenter
            title="Les mystères des permissions"
            talkId="permissions-mysteries"
            onClick={onClick}
          />
          <TalkPresenter
            title="Highway to fail"
            talkId="highway-to-fail"
            surveyId="mixit_2025"
            onClick={onClick}
          />
          <TalkPresenter
            title="What if"
            talkId="choice-must-go-on"
            onClick={onClick}
          />
        </Stack>
      </Stack>
    </PageContainer>
  );
};
