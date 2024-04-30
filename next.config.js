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
        source: '/yeeso/:path*',
        destination: '/talks/highway_to_fail/yeeso/:path*',
        permanent: false,
      },
      {
        source: '/devfest/:path*',
        destination: '/talks/highway_to_fail/devfest_lille_2024/:path*',
        permanent: false,
      },
      {
        source: '/technwine/:path*',
        destination: '/talks/highway_to_fail/technwine_2024/:path*',
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
