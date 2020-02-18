import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import { Button , Lazyload} from 'vant'
// import { Button } from 'mint-ui'

Vue.use(Button);
Vue.use(Lazyload);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
