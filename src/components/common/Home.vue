<template>
    <div class="wrapper">
      <!-- 头部 -->
      <v-head></v-head>
      <div class="contentBox">
        <!-- 侧边菜单 -->
        <v-sidebar></v-sidebar>
         <!-- 子路由显示区 -->
        <div class="routerView">
           <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import vHead from './Header'
import vSidebar from './Sidebar'
export default {
  components:{vHead,vSidebar}
}

</script>

<style>
.contentBox{display: flex;position: absolute;top: 50px;bottom:0;width: 100%;min-width:1015px;overflow: hidden;}
.routerView{flex: 1;overflow: hidden;position: relative;opacity: 1;padding:30px}/*opacity默认值*/
</style>
