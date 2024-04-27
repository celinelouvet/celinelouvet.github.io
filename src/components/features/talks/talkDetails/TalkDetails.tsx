import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Image,
  Spacer,
  type StyleConfig,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { type ConventionTalk } from '@/data';

import { TalkDescription } from './TalkDescription';
import { TalkHeader } from './TalkHeader';

export type TalkDetailsProps = {
  talk: ConventionTalk;
};

export const TalkDetails: FC<TalkDetailsProps> = ({ talk }) => {
  const { pictureId, name, topic } = talk;

  return (
    <>
      <Card size="sm" variant="filled">
        <CardHeader>
          <TalkHeader talk={talk} />
        </CardHeader>

        <CardBody>
          <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
            <TalkDescription talk={talk} />
            <Spacer />
            <Center __css={containerCss}>
              <Image
                __css={imageCss}
                src={`./talks/${pictureId}.jpg`}
                alt={`${name} - ${topic}`}
              />
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

const height = '120px';
const lgWidth = '200px';

const containerCss = {
  height,
  width: { base: '100%', lg: lgWidth },
} satisfies StyleConfig['baseStyle'];

const imageCss = {
  objectFit: 'cover',
  maxH: height,
  maxW: { base: '100%', lg: lgWidth },
} satisfies StyleConfig['baseStyle'];
