//@ts-check

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { readFolderArg } from './readArgs.mjs';

const TARGET_VERSION = '1.22.22';

/** @type {(packages: object) => object} */
const newEngineVersion = (packages) =>
  Boolean(packages.engines)
    ? { ...packages.engines, yarn: TARGET_VERSION }
    : { yarn: TARGET_VERSION };

/** @type {() => object} */
const newScripts = () => ({
  build: 'turbo build',
  start: 'turbo start --cache=local:',
});

/** @type {(filePath: string, packages: object) => Promise<void>} */
const writePackages = async (filePath, packages) => {
  try {
    const content = JSON.stringify(packages, null, 2);
    return await writeFile(filePath, content, 'utf8');
  } catch (err) {
    console.error(`Couldn't write package.json`, err);
    throw err;
  }
};

/** @type {(root: string) => Promise<void>} */
export const overwritePackages = async (root) => {
  try {
    const filePath = join(root, 'package.json');
    const content = await readFile(filePath, 'utf8');

    const packages = JSON.parse(content);
    const newPackages = {
      ...packages,
      engines: newEngineVersion(packages),
      scripts: newScripts(),
    };

    await writePackages(filePath, newPackages);

    console.log(`\t→ Package.json is ready`);
  } catch (error) {
    throw error;
  }
};

/** @type {() => Promise<void>} */
const run = async () => {
  const root = readFolderArg();

  await overwritePackages(root);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
