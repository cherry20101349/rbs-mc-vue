/**
 * Created by wuyp on 2018/3/22.
 */
import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

export default new Router({
  routes: [
    {path: '/',redirect: '/login'},
    {path: '/login',component: resolve => require(['../components/page/Login.vue'], resolve)},
    {path: '/home',component: resolve => require(['../components/common/Home.vue'], resolve),
      children:[
        //课堂管理
        //课堂管理
        {path: '/manageClass',component: resolve => require(['../components/manageClass/manageClass.vue'], resolve)},
        //互动课堂
        {path: '/manageInteractClass',component: resolve => require(['../components/manageClass/manageInteractClass.vue'], resolve)}
      ]
    }
  ]
})

