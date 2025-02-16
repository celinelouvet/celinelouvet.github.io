import { recipe as headerContainerRecipe } from './headerContainer';
import { recipe as pageContainerRecipe } from './pageContainer';

export { HeaderContainer } from './headerContainer';
export { PageContainer } from './pageContainer';

export const layoutRecipes = {
  ...headerContainerRecipe,
  ...pageContainerRecipe,
};
