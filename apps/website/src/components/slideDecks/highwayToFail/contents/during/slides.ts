import type { Slide } from '@/components/slide';

import DuringDauphine from './duringDauphine';
import DuringEssec from './duringEssec';
import DuringHaskellChoice from './duringHaskellChoice';
import DuringHaskellConsequences from './duringHaskellConsequences';
import DuringLearnHaskell from './duringLearnHaskell';
import DuringPlatform from './duringPlatform';
import DuringSectionTitle from './DuringSectionTitle';
import DuringSeed from './duringSeed';
import DuringSite from './duringSite';
import DuringSiteMvp from './duringSiteMvp';
import DuringStack from './duringStack';
import DuringWhere from './duringWhere';


export const slides = [
  DuringSectionTitle,
  ...DuringWhere,
  ...DuringEssec,
  ...DuringDauphine,
  ...DuringSite,
  ...DuringSiteMvp,
  ...DuringPlatform,
  ...DuringStack,
  ...DuringHaskellChoice,
  ...DuringLearnHaskell,
  ...DuringHaskellConsequences,
  ...DuringSeed,
] satisfies Slide[];
