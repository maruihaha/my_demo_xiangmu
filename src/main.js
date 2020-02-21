import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import { Button,Icon } from 'vant'
import store from './store'
// import iscroll from 'iscroll'
// import { Button } from 'mint-ui'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)
Vue.use(Icon);
// Vue.use(iscroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
