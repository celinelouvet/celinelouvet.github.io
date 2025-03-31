//@ts-check

import { access } from 'node:fs/promises';
import { join } from 'node:path';

import { readRootFolderArg } from './readArgs.mjs';

/** @type {(root: string) => Promise<void>} */
const checkNodeModulesExist = async (root) => {
  try {
    const nodeModules = join(root, 'node_modules');
    await access(nodeModules);
  } catch (error) {
    throw new Error(`Couldn't find nodeModules folder`);
  }
};

/** @type {() => Promise<void>} */
const run = async () => {
  const rootFolder = readRootFolderArg();

  await checkNodeModulesExist(rootFolder);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
