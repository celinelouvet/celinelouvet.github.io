import type { Slide } from 'src/components/slide';

import Numbers from './numbers';
import Preface from './preface';

export const slides = [...Preface, ...Numbers] satisfies Slide[];
