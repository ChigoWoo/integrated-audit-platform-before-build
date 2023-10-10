import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from "echarts";
import mock from './mock'
mock.bootstrap()

Vue.use(elementUI, { size: 'mini', zIndex: 3000 })
Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(echarts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
