import fs from 'fs/promises';

export async function prepareOutputFolder(outFolder: string): Promise<void> {
  console.log('[OUT] Preparing output folder', { outFolder });

  try {
    await fs.rm(outFolder, { recursive: true, force: true });
    await fs.mkdir(outFolder, { recursive: true });

    console.log('[OUT] Output folder prepared', { outFolder });
  } catch (error: unknown) {
    console.error('[OUT] Error while preparing output folder', { error });
    throw error;
  }
}
