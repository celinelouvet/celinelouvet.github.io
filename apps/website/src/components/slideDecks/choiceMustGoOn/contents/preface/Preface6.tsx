import { HStack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { FactorList } from './FactorList';

const allFactors = [
  {
    factors: [
      { item: 'Manque d’implication de l’utilisateur', highlighted: false },
      { item: 'Spécifications incomplètes', highlighted: true },
      { item: 'Spécifications changeantes', highlighted: false },
      { item: 'Manque de soutien du management', highlighted: false },
      { item: 'Incompétence technologique', highlighted: true },
    ],
    starts: 1,
  },
  {
    factors: [
      { item: 'Manque de ressources', highlighted: false },
      { item: 'Attendus irréalistes', highlighted: false },
      { item: 'Objectifs flous', highlighted: false },
      { item: 'Délais irréalistes', highlighted: false },
      { item: 'Nouvelle technologie', highlighted: true },
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

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
