// @ts-check
const { z } = require('zod');

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.union([
    z.string().url({
      message:
        'Should be a valid absolute url or a relative url that starts with "/"',
    }),
    z.string().startsWith('/'),
  ]),
  VERSION_NAME: z.string(),
});

const _env = envSchema.safeParse(process.env);

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value)
        return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);

if (!_env.success) {
  console.error(
    '❌ Invalid environment variables\n👇 Fix the following environment variables or update the `.env.validator.js` file.\n',
    ...formatErrors(_env.error.format())
  );
  process.exit(1);
}

console.log('✅ Environment variables validation');

module.exports = {
  envSchema,
};
