import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack gap="2em">
      <Box>
        <Text as="span">
          Nouvelle loi (décret promulgué en <strong>sept. 2017</strong>)
        </Text>
        <List.Root paddingLeft="1em">
          <List.Item>
            Entre en vigueur le <strong>1er janvier 2018</strong>
          </List.Item>
          <List.Item>
            Impose aux e‑commerces d’avoir des avis de clients vérifiés.
          </List.Item>
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      L’objectif est de profiter de la mise en place d’une nouvelle loi. Jusqu’à
      cette loi, les faux avis pullulaient sur les plateformes.
    </Text>
    <Text>
      Nous sommes en décembre 2017 et cette loi entre en vigueur le 1er janvier
      2018.
    </Text>
    <Text>
      Elle va imposer à tous les e-commerces d’avoir des avis de clients
      vérifiés.
    </Text>
    <Text>
      Par « vérifié », on entend un client ayant vraiment acheté un produit chez
      ce commerçant.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
