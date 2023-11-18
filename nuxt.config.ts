// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  css: [
    '~/assets/scss/main.scss',
  ],
  alias: {
    '@': './',
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://api.nuxtjs.dev',
    },
  },
})
