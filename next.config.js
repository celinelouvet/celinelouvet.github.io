if (!process.env.SKIP_ENV_VALIDATIONS) {
  require('./.env.validator');
}

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

module.exports = defineNextConfig({
  distDir: 'build',

  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
        permanent: true,
      },

      {
        source: '/yeeso',
        destination: '/talks/highway_to_fail/yeeso',
        permanent: false,
      },
      {
        source: '/devfest',
        destination: '/talks/highway_to_fail/devfest_lille_2024',
        permanent: false,
      },
      {
        source: '/technwine',
        destination: '/talks/highway_to_fail/technwine_2024',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      // Rewrite app
      {
        source: '/app/:any*',
        destination: '/app/',
      },
    ];
  },
});
