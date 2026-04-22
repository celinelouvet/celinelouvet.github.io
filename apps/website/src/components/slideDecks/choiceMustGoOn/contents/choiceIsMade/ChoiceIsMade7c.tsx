import { Center, Grid, GridItem, Icon, Stack, chakra } from '@chakra-ui/react';
import { TbArrowBigRightFilled } from 'react-icons/tb';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Mesure de la réponse"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100" alignItems="center">
      <chakra.strong>Est-ce que la solution répond au besoin ?</chakra.strong>

      <Center width="100%" flex="1">
        <Grid
          templateColumns="1fr 2em 2fr"
          templateRows="repeat(2, 1fr)"
          columnGap="brand.300"
          rowGap="brand.200"
          alignItems="center"
        >
          <GridItem textAlign="right">Oui</GridItem>
          <GridItem>
            <Icon as={TbArrowBigRightFilled} />
          </GridItem>

          <Stack>
            <chakra.span>Tout va bien</chakra.span>
            <chakra.span>On trace la confirmation</chakra.span>
          </Stack>

          <GridItem textAlign="right">Non</GridItem>
          <GridItem>
            <Icon as={TbArrowBigRightFilled} />
          </GridItem>
          <Stack>
            <chakra.span>On trace la raison</chakra.span>
            <chakra.span>On fait un autre choix</chakra.span>
          </Stack>
        </Grid>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
