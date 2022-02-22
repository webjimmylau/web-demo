import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './theme/element-ui/index.css'

Vue.config.productionTip = false

import '@/assets/styles/base.css'
import '@/assets/styles/common.less'

Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
