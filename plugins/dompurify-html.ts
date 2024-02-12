// https://www.npmjs.com/package/vue-dompurify-html#usage-with-nuxt-3
import VueDOMPurifyHTML from 'vue-dompurify-html'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDOMPurifyHTML)
})
