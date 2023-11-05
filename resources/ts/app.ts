import { createApp } from 'vue/dist/vue.esm-bundler'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IndexPage from '../vue/pages/IndexPage.vue'
import LinksPage from '../vue/pages/LinksPage.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp({
  components: {
    IndexPage,
    LinksPage,
  },
})
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(pinia)
  .mount('#app')
