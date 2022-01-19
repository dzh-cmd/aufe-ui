<template>
  <div id="header" :style="{background:'url('+require('/src/assets/img/headBack.jpeg')+')' + ' no-repeat 100%'}">
    <h1>Find & Shard</h1>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "HeadPart",
  data(){
    return {

    }
  }
}
</script>
<style scoped>

#header{
  height: 420px;
  width: 100%;
}

</style>
