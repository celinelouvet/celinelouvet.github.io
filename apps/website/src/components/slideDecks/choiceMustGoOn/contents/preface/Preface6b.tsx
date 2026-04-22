import { HStack } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { FactorList } from './FactorList';

const allFactors = [
  {
    factors: [
      { item: 'Manque d’implication de l’utilisateur', highlighted: false },
      { item: 'Spécifications incomplètes', highlighted: false },
      { item: 'Spécifications changeantes', highlighted: false },
      { item: 'Manque de soutien du management', highlighted: false },
      { item: 'Incompétence technologique', highlighted: false },
    ],
    starts: 1,
  },
  {
    factors: [
      { item: 'Manque de ressources', highlighted: false },
      { item: 'Attendus irréalistes', highlighted: false },
      { item: 'Objectifs flous', highlighted: false },
      { item: 'Délais irréalistes', highlighted: false },
      { item: 'Nouvelle technologie', highlighted: false },
    ],
    starts: 6,
  },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Facteurs de mise en difficulté"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <HStack
      width="100%"
      height="100%"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {allFactors.map((factorGroup, groupIndex) => (
        <FactorList
          key={groupIndex}
          factors={factorGroup.factors}
          starts={factorGroup.starts}
        />
      ))}
    </HStack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Il y en a une dizaine. On ne va pas les regarder en détails,{' '}
  </SlideNote>
);

const slide = { content, note };
export default slide;
