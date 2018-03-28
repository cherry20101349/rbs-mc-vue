// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import axios from 'axios';
import MyPlugin from '../src/assets/js/plugn.js';
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';// easyui样式


Vue.use(ElementUI);
Vue.use(MyPlugin);
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});