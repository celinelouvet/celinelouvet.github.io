import { recipe as dateFormatterRecipe } from './dateFormatter';
import { recipes as headingsRecipes } from './headings';
import { recipe as remoteTextRecipe } from './remoteText';
import { recipe as timeTextRecipe } from './timeText';

export { DateFormatter } from './dateFormatter';
export {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from './headings';
export { RemoteText } from './remoteText';
export { TimeText } from './timeText';

export const typographyRecipes = {
  ...dateFormatterRecipe,
  ...headingsRecipes,
  ...timeTextRecipe,
  ...remoteTextRecipe,
};
