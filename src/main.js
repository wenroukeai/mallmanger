// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import MyHttpServer from '@/plugins/http.js'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import router from './router'

Vue.config.productionTip = false
//使用element
Vue.use(ElementUI);
//使用自己弄的插件
Vue.use(MyHttpServer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
