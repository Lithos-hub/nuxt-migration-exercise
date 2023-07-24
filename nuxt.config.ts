// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/eslint-module', // => error
    '@element-plus/nuxt',
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix_except_default',
        locales: ['en', 'vi'],
        defaultLocale: 'en',
        vueI18n: './i18n.config.js',
      },
    ],
  ],
  css: ['@/assets/css/all.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/all.scss"; @import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
        },
      },
    },
  },
});
