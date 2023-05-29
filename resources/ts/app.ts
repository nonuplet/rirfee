import { createApp } from 'vue/dist/vue.esm-bundler'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IndexPage from '../vue/pages/IndexPage.vue'

createApp({
  components: {
    IndexPage,
  },
})
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
