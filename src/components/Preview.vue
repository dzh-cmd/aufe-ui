<template>
  <!-- 各个部分的消息预览页面 -->
  <div id="preview">
      <div id="pre_head">
        <slot name="pre_title">
          <span>热点关注</span>
        </slot>
        <div>
          <el-button icon="el-icon-refresh-right">刷新</el-button>
          <el-button style="margin-right: 10px">更多<i class="el-icon-right" style="margin-left: 5px"></i></el-button>
        </div>
      </div>
      <el-divider></el-divider>
      <div id="pre_content">
          <ul>
            <li v-for="(item, index) in pre_msg" :key="index">
              {{item.id}} <el-tag>{{item.time}}</el-tag> <span style="font-size: 14px">{{item.title}}</span>
            </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "Preview",
  data(){
    return{
      pre_msg: [
        {
          id:1,
          title: "今天天气真好",
          time: '2020-01-09'
        },
        {
          id:2,
          title: "今天天气真好",
          time: '2020-01-09'
        },
        {
          id:3,
          title: "今天天气真好",
          time: '2020-01-09'
        },
        {
          id:4,
          title: "今天天气真好",
          time: '2020-01-09'
        },
        {
          id:5,
          title: "今天天气真好",
          time: '2020-01-09'
        },
        {
          id:6,
          title: "今天天气真好",
          time: '2020-01-09'
        },
          {
              id:7,
              title: "今天天气真好",
              time: '2020-01-09'
          },
          {
              id:8,
              title: "今天天气真好",
              time: '2020-01-09'
          },
          {
              id:9,
              title: "今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好",
              time: '2020-01-09'
          },
          {
              id:10,
              title: "今天天气真好",
              time: '2020-01-09'
          }
      ]
    }
  }
}
</script>
<style scoped>

#preview {
    width: 350px;
    padding: 5px;
    border: #eeeeee solid 1px;
    border-top: red solid 5px;
}

#pre_head {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
}

#pre_head > span {
  font-size: 22px;
  font-family: "KaiTi", sans-serif;
  margin-left: 10px;
  line-height: 45px;
}

.el-button {
  height: 30px;
  width: 80px;
  margin-top: 7px;
  padding: 0;
}

.el-divider{
  margin: 0;
}

#pre_content > ul {
  list-style: none;
  padding-left: 20px;
}

#pre_content > ul > li {
    height: 30px;
    margin: 0;
    overflow: hidden;
    line-height: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.el-tag{
  height: 25px;
  padding: 0;
  margin: 0;line-height: 25px;
}

</style>
