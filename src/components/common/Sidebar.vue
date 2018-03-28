<template>
<el-menu default-active="2" :default-openeds="openeds" class="el-menu-vertical-demo" router background-color="#3E618D" text-color="#fff" active-text-color="#ffd04b">
    <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>课表管理</span>
        </template>
        <el-menu-item  index="manageClass"><i class="el-icon-location"></i>课表管理</el-menu-item>
        <el-menu-item index="manageInteractClass"><i class="el-icon-location"></i>互动课堂</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>资源管理</span>
        </template>
        <el-menu-item  index="2-1"><i class="el-icon-location"></i>知识点</el-menu-item>
        <el-menu-item index="2-2"><i class="el-icon-location"></i>任务审核</el-menu-item>
        <el-menu-item index="2-3"><i class="el-icon-location"></i>优课审核</el-menu-item>
        <el-menu-item index="2-4"><i class="el-icon-location"></i>名师管理</el-menu-item>
        <el-menu-item index="2-5"><i class="el-icon-location"></i>资源维护</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据分析</span>
        </template>
        <el-menu-item  index="3-1"><i class="el-icon-location"></i>资源统计</el-menu-item>
        <el-menu-item index="3-2"><i class="el-icon-location"></i>资源热度</el-menu-item>
        <el-menu-item index="3-3"><i class="el-icon-location"></i>优课排行</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>消息中心</span>
        </template>
        <el-menu-item  index="4-1"><i class="el-icon-location"></i>消息设置</el-menu-item>
    </el-submenu>
</el-menu>
</template>
<script>
export default{
  data(){
    return{
      openeds:['1']
    }
  }
}

</script>
<style>
    #menu {flex:0 0 216px;margin:0px auto;width:216px;background:#3E618D;overflow-y:auto;overflow-x:hidden;}
    .el-menu{border-right:none;width:200px}
</style>
