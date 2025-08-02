// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  devtools: { enabled: true, telemetry: false },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        {
          name: 'google',
          content: 'notranslate',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
      link: [
        {
          type: 'image/x-icon',
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  telemetry: { enabled: false },
  eslint: {
    config: {
      nuxt: { sortConfigKeys: true },
      stylistic: true,
    },
  },

  fonts: {
    families: [{
      name: 'Roboto',
      display: 'swap',
      provider: 'google',

    }],
    defaults: {
      subsets: ['cyrillic', 'latin'],
      preload: true,
      weights: [400, 500, 700],
    },
  },
})
