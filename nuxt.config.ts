// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      style: [
        {
          children: "body { margin: 0px }"
        }
      ]
    }
  }
})
