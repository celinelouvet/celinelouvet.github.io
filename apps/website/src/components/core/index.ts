import { feedbackSlotRecipes } from './feedback';
import { layoutRecipes } from './layout';
import { mediaSlotRecipes } from './media';
import { overrideRecipes, overrideSlotRecipes } from './override';
import { surveyRecipes, surveySlotRecipes } from './survey';
import { typographyRecipes } from './typography';

export * from './disclosure';
export * from './feedback';
export * from './layout';
export * from './list';
export * from './media';
export * from './navigation';
export * from './overlay';
export * from './override';
export * from './slide';
export * from './survey';
export * from './typography';

export const coreRecipes = {
  ...layoutRecipes,
  ...overrideRecipes,
  ...surveyRecipes,
  ...typographyRecipes,
};

export const coreSlotRecipes = {
  ...feedbackSlotRecipes,
  ...mediaSlotRecipes,
  ...overrideSlotRecipes,
  ...surveySlotRecipes,
};
