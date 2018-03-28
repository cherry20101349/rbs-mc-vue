<template>
   <el-table  border style="width: 100%">
      <el-table-column prop="roomId" label="课堂ID" width="180">
      </el-table-column>
      <el-table-column prop="interactName" label="课程名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="机构">
      </el-table-column>
      <el-table-column prop="appointStartTime" label="课程开始时间">
      </el-table-column>
      <el-table-column prop="appointEndTime" label="课程结束时间">
      </el-table-column>
    </el-table>
</template>
<script>
export default{
  data(){
    return{
      
    }
  },
  created(){
    this.getInteractClass();
  },
  methods:{
    getInteractClass(){
      this.ajaxSubmit("/studio/scheclass/asysGetInteractClasses", (data, zepXHR) => {
        console.log(111)

      })
    }
  }
}
</script>
<style>

</style>
