// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
  ],
  devtools: {
    enabled: true,
    telemetry: false,
  },
  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/',
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
          href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`,
        },
      ],
    },
  },
  css: ['normalize.css'],
  compatibilityDate: '2025-07-15',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import'],
          additionalData(source, filename) {
            // Пока просто проверяем по названию файла, что не вставляем в variables содержимое самого себя
            if (filename.indexOf('variables') !== -1) {
              return source
            }

            return `@use '~/assets/styles/variables' as *;\n${source}`
          },
        },
      },
    },
  },
  telemetry: { enabled: false },
  eslint: {
    config: {
      nuxt: { sortConfigKeys: true },
      stylistic: true,
    },
  },

  fonts: {
    families: [
      {
        name: 'Roboto',
        display: 'swap',
        provider: 'google',
      },
    ],
    defaults: {
      subsets: [
        'cyrillic',
        'latin',
      ],
      preload: true,
      weights: [
        400,
        500,
        700,
      ],
    },
  },
})
