import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@/assets/styles/base.css'
import '@/assets/styles/common.less'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
