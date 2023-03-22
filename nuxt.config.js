export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "Music",

    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },

      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { hid: "description", name: "description", content: "" },

      { name: "format-detection", content: "telephone=no" },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    "@/assets/scss/index.scss",
    "@/assets/scss/variables.scss",
    "@/assets/icons.css",
    "@/assets/ubuntu.css",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/scss/variables.scss'",
        },
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [{ src: "~/plugins/global-components.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    // https://go.nuxtjs.dev/typescript

    "@nuxt/typescript-build",

    // @nuxtjs/composition-api

    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {},
};
