import type { Slide } from 'src/components/slide';

import ExampleMvpVersion from './1_mvpVersion';
import ExampleFinalVersion from './2_finalVersion';
import ExampleTitle from './ExampleTitle';

export default [
  ExampleTitle,
  ...ExampleMvpVersion,
  ...ExampleFinalVersion,
] satisfies Slide[];
