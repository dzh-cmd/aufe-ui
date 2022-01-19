<template>
  <div id="content">
    <el-row>
      <el-col :span="6" :offset="9">
        <h1>在这里你可以</h1>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="5" :message="cardTitle">
        <Card>
<!--          <span slot="card_title">分享你的讯息</span>-->
              <router-link to="/blog" slot="card_title">分享你的讯息</router-link>
        </Card>
      </el-col>
      <el-col :span="5">
        <Card>
          <span slot="card_title">寻找竞赛队友</span>
        </Card>
      </el-col>
      <el-col :span="5">
        <Card>
          <span slot="card_title">校外拼车同行</span>
        </Card>
      </el-col>
      <el-col :span="5">
        <Card>
          <span slot="card_title">课堂资料共享</span>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Card from "@/components/Card";

export default {
  name: "ContentCard",
  components: {
    Card,
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
#content {
  width: 100%;
  padding-top: 20px;
  height: 500px;
  background-color: aqua;
}
</style>
