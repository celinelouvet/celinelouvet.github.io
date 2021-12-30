export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Céline Louvet",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components/", { path: "~/components/summary/", prefix: "summary" }, { path: "~/components/content/", prefix: "content" }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
    ["@nuxtjs/moment", { defaultLocale: "fr", locales: ["fr", "en-gb"], plugins: ["moment-precise-range-plugin"] }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["bootstrap-vue/nuxt", { icons: true }], "@nuxtjs/i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Nunito: [400, 600, 700],
      "PT Sans Narrow": [400, 600],
    },
  },

  i18n: {
    vueI18nLoader: true,
    defaultLocale: "fr",
    locales: [
      {
        name: "English",
        code: "us",
        iso: "en-US",
      },
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
      },
    ],
  },
};
