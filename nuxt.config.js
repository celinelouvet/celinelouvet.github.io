const defaultLocale = "fr";

export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Céline Louvet",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "me", href: "https://pouet.chapril.org/@celine_louvet" },
    ],
  },

  env: {
    ACTIVATE_LANGUAGE: "true",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/",
    { path: "~/components/blog/", prefix: "blog" },
    { path: "~/components/home/", prefix: "home" },
    { path: "~/components/resume/", prefix: "resume" },
    { path: "~/components/resume/summary/", prefix: "resumeSummary" },
    { path: "~/components/resume/content/", prefix: "resumeContent" },
    { path: "~/components/resume/language/", prefix: "resumeLanguage" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
    ["@nuxtjs/moment", { defaultLocale, locales: ["fr", "en-gb"], plugins: ["moment-precise-range-plugin"] }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["bootstrap-vue/nuxt", { icons: true }], "@nuxtjs/i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.md$/,
        loader: "raw-loader",
        exclude: /(node_modules)/,
      });
    },
  },

  bootstrapVue: {
    components: [
      "BAvatar",
      "BContainer",
      "BButton",
      "BDropdown",
      "BDropdownItem",
      "BFormCheckbox",
      "BIcon",
      "BIconBicycle",
      "BIconCalendarWeekFill",
      "BIconEnvelopeFill",
      "BIconFileEarmarkPdfFill",
      "BIconGeoAltFill",
      "BIconHourglassSplit",
      "BIconLinkedin",
      "BIconTranslate",
      "BIconTwitter",
      "BIconMastodon",
    ],
  },

  googleFonts: {
    families: {
      Nunito: [400, 600, 700],
      "PT Sans Narrow": [400, 600],
    },
  },

  i18n: {
    vueI18nLoader: true,
    defaultLocale,
    vueI18n: {
      fallbackLocale: defaultLocale,
    },
    detectBrowserLanguage: {
      useCookie: false,
    },
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
      },
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
      },
    ],
  },

  ignore: "pdf-generator/",
};
