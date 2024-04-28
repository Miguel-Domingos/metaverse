// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "metaverse",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 700],
        },
        display: "swap",
      },
    ],
  ],
});
