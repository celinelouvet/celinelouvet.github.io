import { recipe as dateTextRecipe } from './dateText';
import { recipe as durationTextRecipe } from './durationText';
import { recipes as headingsRecipes } from './headings';
import { recipe as periodTextRecipe } from './periodText';
import { recipe as timeTextRecipe } from './timeText';

export { DateText } from './dateText';
export { DurationText } from './durationText';
export {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from './headings';
export { PeriodText } from './periodText';
export { TimeText } from './timeText';

export const typographyRecipes = {
  ...dateTextRecipe,
  ...durationTextRecipe,
  ...headingsRecipes,
  ...periodTextRecipe,
  ...timeTextRecipe,
};
