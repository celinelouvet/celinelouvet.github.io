//@ts-check

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { readEnvArg, readAppVersionArg, readFolderArg } from './readArgs.mjs';

/** @type {(content: string, version: string) => string} */
const getContent = (env, version) => {
  const baseUrl =
    env === 'prod'
      ? 'https://celine.louvet.me'
      : `https://${version}-dot-celinelouvet-cv.ew.r.appspot.com`;
  const apiBaseUrl = `${baseUrl}/api`;

  return `runtime: nodejs22

instance_class: F2

automatic_scaling:
  max_instances: 1

handlers:
  - url: /.*
    secure: always
    script: auto

env_variables:
  HOST: '0.0.0.0'
  VITE_BASE_URL: '${baseUrl}'
  VITE_API_BASE_URL: '${apiBaseUrl}'
  VERSION_NAME: 'prod'

`;
};

/** @type {(content: string, root: string) => Promise<void>} */
const writeAppFile = async (content, root) => {
  try {
    const filePath = join(root, 'out/app.yaml');
    return await writeFile(filePath, content, 'utf8');
  } catch (err) {
    console.error(`Couldn't write app.yaml`, err);
    throw err;
  }
};

/** @type {(env:string, version: string, root: string) => Promise<void>} */
export const createAppFile = async (env, version, root) => {
  try {
    const content = getContent(env, version);
    await writeAppFile(content, root);

    console.log(`\t→ app.yml is ready`);
  } catch (error) {
    throw error;
  }
};

const run = async () => {
  const env = readEnvArg();
  const version = readAppVersionArg();
  const root = readFolderArg();

  await createAppFile(env, version, root);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
