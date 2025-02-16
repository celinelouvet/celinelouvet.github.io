import { feedbackSlotRecipes } from './feedback';
import { overrideRecipes, overrideSlotRecipes } from './override';
import { typographyRecipes } from './typography';

export * from './disclosure';
export * from './feedback';
export * from './list';
export * from './navigation';
export * from './overlay';
export * from './override';
export * from './typography';

export const coreRecipes = { ...overrideRecipes, ...typographyRecipes };

export const coreSlotRecipes = {
  ...feedbackSlotRecipes,
  ...overrideSlotRecipes,
};
