import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  unocss: {
    uno: true,
    attributify: true
  }
});
