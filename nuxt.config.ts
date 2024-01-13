// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      style: [
        {
          children: "body { margin: 0px }"
        }
      ]
    }
  },
  alias: {
    'class-validator': 'class-validator/cjs/index.js',
  },
  runtimeConfig: {
    public: {
      api: {
        url: ''
      }
    }
  }
})
