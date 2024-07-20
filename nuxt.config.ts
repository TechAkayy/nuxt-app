// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxt/image'],
  image: {
    domains: ['images.unsplash.com'],
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },
})
