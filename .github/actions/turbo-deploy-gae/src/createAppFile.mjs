//@ts-check

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { getBaseUrls } from './getBaseUrls.mjs';
import {
  readAppVersionArg,
  readDistFolderArg,
  readEnvArg,
  readRootFolderArg,
  readServiceArg,
} from './readArgs.mjs';

/** @type {(content: string, version: string, service: string, dist: string) => string} */
const getContent = (env, version, service, dist) => {
  const versionName = env === 'prod' ? 'prod' : version;

  const baseUrls = getBaseUrls(env, version);

  const apiHandlers = `
  - url: /.*
    secure: always
    script: auto
`;

  const appHandlers = `
  - url: /
    static_files: ${dist}/index.html
    upload: ${dist}/index.html
    secure: always

  - url: /test
    secure: always
    script: auto

  - url: /(.*)
    static_files: ${dist}/\\1
    upload: ${dist}/(.*)
    secure: always
`;

  return `runtime: nodejs22
service: ${service}

instance_class: F2

automatic_scaling:
  max_instances: 1

handlers: ${service === 'api' ? apiHandlers : appHandlers}


env_variables:
  HOST: '0.0.0.0'
  VITE_BASE_URL: '${baseUrls.app}'
  VITE_API_BASE_URL: '${baseUrls.api}'
  VERSION_NAME: '${versionName}'

`;
};

/** @type {(content: string, root: string) => Promise<void>} */
const writeAppFile = async (content, root) => {
  try {
    const filePath = join(root, 'app.yaml');
    await writeFile(filePath, content, 'utf8');

    console.log(`\t→ app.yml written at ${filePath}`);

    const readContent = await readFile(filePath, 'utf8');
    console.log('content', readContent);
  } catch (err) {
    console.error(`Couldn't write app.yaml`, err);
    throw err;
  }
};

/** @type {(env:string, version: string, service: string, root: string, dist: string) => Promise<void>} */
export const createAppFile = async (env, version, service, root, dist) => {
  try {
    const content = getContent(env, version, service, dist);
    await writeAppFile(content, root);

    console.log(`\t→ app.yml is ready`);
  } catch (error) {
    throw error;
  }
};

const run = async () => {
  const env = readEnvArg();
  const version = readAppVersionArg();
  const root = readRootFolderArg();
  const service = readServiceArg();
  const distFolder = readDistFolderArg();

  await createAppFile(env, version, service, root, distFolder);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
