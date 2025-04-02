//@ts-check

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { readRootFolderArg } from './readArgs.mjs';

const content = [
  '.gcloudignore',
  '.gitignore',
  'README.md',
  '.turbo',
  'node_modules',
].join('\n');

/** @type {(root: string) => Promise<void>} */
const createGcloudIgnore = async (root) => {
  const filePath = join(root, '.gcloudignore');
  await writeFile(filePath, content);

  console.log(`\t→ .gcloudignore is ready`);
};

/** @type {() => Promise<void>} */
const run = async () => {
  const root = readRootFolderArg();

  await createGcloudIgnore(root);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
