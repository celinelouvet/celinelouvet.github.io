import { Center, Grid, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';

import {
  ColorMode,
  H1Heading,
  H2Heading,
  QrCode,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

const Title: FC<{ title: string }> = ({ title }) =>
  title.split('\n').map((line, i) => (
    <H1Heading
      key={i}
      variant="slide"
      size="lg"
      textAlign="center"
      lineHeight="1.5"
    >
      {line}
    </H1Heading>
  ));

export const content = (
  <SlideContent colormode={ColorMode.dark} type={SlideContentTypes.fullContent}>
    <Grid
      templateColumns="3fr 2fr"
      gap="1em"
      width="100%"
      height="100%"
      justifyContent="stretch"
    >
      <Center>
        <Title title="Merci pour votre attention" />
      </Center>
      <Stack textAlign="center">
        <QrCode value="https://openfeedback.io/technwine-2024/2024-06-18/lvyAhIjLixfhilfBn5tY" />
        <H2Heading variant="slide">Retours</H2Heading>
      </Stack>
    </Grid>
  </SlideContent>
);

// export const content = <SlideContent type={SlideContentTypes.endTitle} />;

const note = (
  <SlideNote>
    <Text>Voilà, merci pour votre attention.</Text>
    <Text>
      Je vous ai mis le QR code pour les feedbacks, si vous avez envie d’en
      laisser un.
    </Text>
    <Text>
      Je reste dans le coin pour quelques temps, donc n’hésitez pas à venir
      discuter.
    </Text>
    <Text>
      Je suis très mauvaise à reconnaître les gens, donc n’hésitez pas à
      m’aborder :)
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
