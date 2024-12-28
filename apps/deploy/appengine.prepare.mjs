/* eslint-disable no-undef */

import fs from 'fs';
import path from 'path';

const TARGET_VERSION = '1.22.22';

const ACCEPTED_ENVS = ['prod', 'staging'];

/** @type {() => string} */
const readEnvArg = () => {
  const envArg = process.argv.find((arg) => arg.startsWith('--env='));
  const env = Boolean(envArg) ? envArg.split('=')[1] : undefined;

  if (env === undefined) {
    throw new Error(`Environment is not provided`);
  }
  if (!ACCEPTED_ENVS.includes(env)) {
    throw new Error(`Unknown environment: ${env}`);
  }

  return env;
};

/** @type {() => string} */
const readAppVersionArg = () => {
  const versionArg = process.argv.find((arg) => arg.startsWith('--version='));
  const version = Boolean(versionArg) ? versionArg.split('=')[1] : undefined;

  if (version === undefined) {
    throw new Error(`Unknown version: ${version}`);
  }
  return version;
};

/** @type {(env: string) => string} */
const getAppFilename = (env) => {
  switch (env) {
    case 'prod':
      return 'app.prod.yaml';
    case 'staging':
      return 'app.staging.yaml';
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
};

/** @type {(content: string) => Promise<void>} */
const writeAppFile = async (content) => {
  try {
    const filePath = path.resolve(import.meta.dirname, 'app.yaml');
    return await fs.promises.writeFile(filePath, content, 'utf8');
  } catch (err) {
    console.error(`Couldn't write app.yaml`, err);
    throw err;
  }
};

/** @type {(env:string, version: string) => Promise<void>} */
const prepareAppFile = async (env, version) => {
  try {
    const appFilename = getAppFilename(env);
    const filePath = path.resolve(import.meta.dirname, appFilename);

    const content = await fs.promises.readFile(filePath, 'utf8');
    const newContent = content.replace(/__VERSION_NAME__/g, version);

    await writeAppFile(newContent);

    console.log(`\tapp.yml is ready`);
  } catch (error) {
    throw error;
  }
};

const updateVersion = (packages) => {
  packages.engines.yarn = TARGET_VERSION;

  return packages;
};

/** @type {(filePath: string, packages: object) => Promise<void>} */
const writePackages = async (filePath, packages) => {
  try {
    const content = JSON.stringify(packages, null, 2);
    return await fs.promises.writeFile(filePath, content, 'utf8');
  } catch (err) {
    console.error(`Couldn't write package.json`, err);
    throw err;
  }
};

/** @type {() => Promise<void>} */
const forceYarnVersion = async () => {
  try {
    const filePath = path.resolve(import.meta.dirname, 'package.json');
    const content = await fs.promises.readFile(filePath, 'utf8');

    const packages = JSON.parse(content);
    const newPackages = updateVersion(packages);

    await writePackages(filePath, newPackages);

    console.log(`\tYarn version is forced to ${TARGET_VERSION}`);
  } catch (error) {
    throw error;
  }
};

/** @type {() => Promise<void>} */
const run = async () => {
  console.log(`Preparing for deployment...`);

  const env = readEnvArg();
  console.log(`\tEnvironment: ${env}`);

  const version = readAppVersionArg();
  console.log(`\tVersion: ${version}\n`);

  await prepareAppFile(env, version);
  await forceYarnVersion();

  console.log(`Done`);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
