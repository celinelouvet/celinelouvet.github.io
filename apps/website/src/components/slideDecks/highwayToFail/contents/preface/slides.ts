import type { Slide } from '@/components/slide';

import Numbers from './numbers';
import Preface from './preface';

export const slides = [...Preface, ...Numbers] satisfies Slide[];
