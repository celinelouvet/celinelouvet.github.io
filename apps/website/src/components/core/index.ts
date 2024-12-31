import { overrideRecipes, overrideSlotRecipes } from './override';
import { typographyRecipes } from './typography';

export * from './disclosure';
export * from './override';
export * from './typography';

export const coreRecipes = {
  ...overrideRecipes,
  ...typographyRecipes,
};

export const coreSlotRecipes = {
  ...overrideSlotRecipes,
};
