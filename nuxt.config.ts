// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/ionic', '@nuxtjs/tailwindcss', 'maz-ui/nuxt'],
  ssr: false,
  mazUi: {
    injectUseToast: true,
  },
});
