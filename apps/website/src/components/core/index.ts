import { feedbackSlotRecipes } from './feedback';
import { layoutRecipes } from './layout';
import { mediaSlotRecipes } from './media';
import { overrideRecipes, overrideSlotRecipes } from './override';
import { typographyRecipes } from './typography';

export * from './disclosure';
export * from './feedback';
export * from './layout';
export * from './list';
export * from './media';
export * from './navigation';
export * from './overlay';
export * from './override';
export * from './typography';

export const coreRecipes = {
  ...layoutRecipes,
  ...overrideRecipes,
  ...typographyRecipes,
};

export const coreSlotRecipes = {
  ...feedbackSlotRecipes,
  ...mediaSlotRecipes,
  ...overrideSlotRecipes,
};
