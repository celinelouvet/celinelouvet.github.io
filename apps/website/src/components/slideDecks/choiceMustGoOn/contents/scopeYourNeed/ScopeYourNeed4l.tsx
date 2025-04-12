import { Grid } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Item, Line } from './components/Line';


const data = [
  {
    need: 'Gestion de l’accès aux pages',
    type: 'Besoin principal',
    priority: 'Obligatoire',
    shown: ['need', 'type', 'priority'],
    highlighted: false,
  },
  {
    need: 'Organisation en équipes',
    type: 'Notion de groupe',
    priority: 'Utile',
    shown: ['need', 'type', 'priority'],
    highlighted: false,
  },
  {
    need: 'Permissions temporaires',
    type: 'Ajout manuel à un autre groupe',
    priority: 'Facultatif',
    shown: ['need', 'type', 'priority'],
    highlighted: false,
  },
  {
    need: 'Permissions supplémentaires en fonction de l’utilisateur',
    type: 'Ajout à plusieurs groupes',
    priority: 'Non nécessaire',
    shown: ['need'],
    highlighted: true,
  },
] satisfies Item[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Cadrer le besoin"
    alignContent="flex-start"
  >
    <Grid
      width="100%"
      height="100%"
      templateColumns="2fr 2em 2fr 2em 1fr"
      templateRows="repeat(4, 1fr)"
      gap="0"
      alignItems="center"
    >
      {data.map((item, index) => (
        <Line key={index} {...item} />
      ))}
    </Grid>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
