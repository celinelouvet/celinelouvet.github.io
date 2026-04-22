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
    title="Méthode définie"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100" alignItems="center">
      <chakra.strong>Est-ce que la méthode est adaptée ?</chakra.strong>

      <Center width="100%" flex="1" opacity="0">
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
          <GridItem>Tout va bien</GridItem>

          <GridItem textAlign="right">Non</GridItem>
          <GridItem>
            <Icon as={TbArrowBigRightFilled} />
          </GridItem>
          <Stack>
            <chakra.span>On adapte la méthode prévue</chakra.span>
            <chakra.span>On trace la raison et le changement</chakra.span>
          </Stack>
        </Grid>
      </Center>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
