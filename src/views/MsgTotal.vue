<template>
    <el-container id="total" style="background-color: #f7f9fb">
        <el-aside style="width: 15%;min-width: 200px;">
            <div style="height: 35%;margin-top: 60px" id="blog_user_profile">
                <el-image
                    style="width: 100px; height: 100px;border-radius: 100%;margin-bottom: 15px;min-width: 100px;min-height: 100px"
                    :src="headImage"
                    fit="fill">
                </el-image>
                <p class="blog_p"><span>杜志华</span>同学</p>
                <p class="blog_p"><span>晚上好!</span>欢迎您</p>
                <router-link tag="button" to="/total" style="width: 70%; height: 45px;padding: 0;font-size: 18px"
                             type="primary">进入个人中心
                </router-link>
            </div>
            <el-menu default-active="1" style="margin-left: 10px;background-color: #f7f9fb">
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航五</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航六</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container style="width: 85%">
            <el-header style="height: 10%;background-color: #eeeeee;padding: 0;display: flex;align-items: center">
                <el-row style="width: 100%;background-color: #eeeeee;padding: 0;">
                    <el-col :span="8" :offset="3">
                        <el-input placeholder="请输入内容" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
            </el-header>
            <el-row style="width: 100%;height: 80px;display: flex;align-items: center">
                <el-col :offset="3" :span="21">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-main style="height: 1000px;width: 100%;padding: 0">
                <el-col :offset="3" :span="17" style="border-top: orange solid 5px;">
                    <p id="total_title">校园热点</p>
                    <p>帖数:<span class="span_red">16612</span> 今日发表:<span class="span_red">12</span> 今日上线人数:<span
                        class="span_red">12</span></p>
                </el-col>
                <el-col :offset="3" :span="17" style="margin-top: 30px">
                    <el-row shadow="always" class="total_item" style="height: 150px;">
                        <el-col :span="16">
                            <el-row>
                                <span class="text_id">1</span>
                                <span class="text_title">
                                    <router-link to="/detail">
                                        今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊
                                    </router-link>
                                </span>
                            </el-row>
                            <el-row class="total_tag">
                                <el-tag>回复数: <span>100</span></el-tag>
                                <el-tag>发表时间: <span>2021-09-12</span></el-tag>
                                <el-tag>浏览数: <span>100</span></el-tag>
                            </el-row>
                        </el-col>
                        <el-col :span="6" style="height:100%;display: flex;align-items: center;flex-direction: column;">
                            <el-image
                                style="width: 100px; height: 100px;margin: 10px 0"
                                :src="circleUrl"
                                fit="fit"></el-image>
                            <p>张三呀呀呀</p>
                        </el-col>
                    </el-row>
                    <el-row class="total_item" style="height: 150px;">
                        <el-col :span="16">
                            <el-row>
                                <span class="text_id">1</span>
                                <span class="text_title">今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊</span>
                            </el-row>
                            <el-row class="total_tag">
                                <el-tag>回复数: <span>100</span></el-tag>
                                <el-tag>发表时间: <span>2021-09-12</span></el-tag>
                                <el-tag>浏览数: <span>100</span></el-tag>
                            </el-row>
                        </el-col>
                        <el-col :span="6" style="height:100%;display: flex;align-items: center;flex-direction: column;">
                            <el-image
                                style="width: 100px; height: 100px;margin: 10px 0"
                                :src="circleUrl"
                                fit="fit"></el-image>
                            <p>张三呀呀呀</p>
                        </el-col>
                    </el-row>
                    <el-row class="total_item" style="height: 150px;">
                        <el-col :span="16">
                            <el-row>
                                <span class="text_id">1</span>
                                <span class="text_title">今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊今天天气可真好啊</span>
                            </el-row>
                            <el-row class="total_tag">
                                <el-tag>回复数: <span>100</span></el-tag>
                                <el-tag>发表时间: <span>2021-09-12</span></el-tag>
                                <el-tag>浏览数: <span>100</span></el-tag>
                            </el-row>
                        </el-col>
                        <el-col :span="6" style="height:100%;display: flex;align-items: center;flex-direction: column;">
                            <el-image
                                style="width: 100px; height: 100px;margin: 10px 0"
                                :src="circleUrl"
                                fit="fit"></el-image>
                            <p>张三呀呀呀</p>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :offset="3" :span="17" style="height: 100px;display: flex;align-items: center;justify-content: center">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-size="10"
                        style="height: 30px"
                        layout="total, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </el-col>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>

export default {
    name: "Blog",
    data() {
        return {
            headImage: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        }
    }
}
</script>
<style scoped>
#total {
    height: 100vh;
    width: 100%;
}

.el-menu-item > i {
    height: 56px;
    line-height: 56px;
}

/*左侧用户中心的样式设置*/
#blog_user_profile {
    display: flex;
    flex-direction: column;
    /*纵轴上的居中*/
    align-items: center;
}

.blog_p {
    font-size: 20px;
    margin-bottom: 10px;
}

/*头部的菜单栏*/
.el-menu-demo > li {
    height: 100%;
    display: flex;
    font-size: 20px;
    align-items: center;
}

.msg_pre {
    height: auto;
}

.el-breadcrumb__item {
    font-size: 18px;
}

#total_title {
    font-size: 35px;
    display: inline-block;
    margin: 10px 0;
}

.span_red {
    color: red;
}

.text_id{
    display: inline-block;
    height: 40px;
    width: 40px;
    font-size: 22px;
    text-align: center;
    line-height: 40px;
    background-color: #5cae97;
    border-radius: 100%;
    margin: 20px ;
}

.text_title {
    font-size: 22px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 400px;
    margin-top: 25px;
}

.total_tag > .el-tag {
    height: 40px;
    margin: 0 10px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 40px;
    padding: 0 5px;
}

.total_item{
    -webkit-box-shadow: #ccc 0 5px 5px;
    -moz-box-shadow: #ccc 0 5px 5px;
    box-shadow: #ccc 0 5px 5px;
    transition-duration: 0.4s;
    margin-bottom: 20px;
}

.total_item:hover{
    -webkit-box-shadow: #ccc 0 10px 10px;
    -moz-box-shadow: #ccc 0 10px 10px;
    box-shadow: #ccc 0 10px 10px;
    cursor: pointer;
}

</style>
