import { type Stack } from '@/data';

// Stacks
export const simpleStack1 = {
  type: 'Simple stack 1',
  technos: ['simple 1'],
} satisfies Stack;

const simpleStack2 = {
  type: 'Simple stack 2',
  technos: ['simple 1', 'simple 2'],
} satisfies Stack;

export const platformStack1 = {
  type: 'Platform stack 1',
  technos: [{ type: 'GCP', technos: ['GCP 1', 'GCP 2', 'GCP 3'] }],
} satisfies Stack;

const platformStack2 = {
  type: 'Platform stack 2',
  technos: [{ type: 'AWS', technos: ['AWS 1', 'AWS 2', 'AWS 3'] }],
} satisfies Stack;

export const simpleStacks = [simpleStack1, simpleStack2] satisfies Stack[];
export const platformStacks = [
  platformStack1,
  platformStack2,
] satisfies Stack[];
export const allStacks = [...simpleStacks, ...platformStacks] satisfies Stack[];
