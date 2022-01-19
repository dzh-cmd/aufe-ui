<template>
    <el-container id="blog" style="background-color: #f7f9fb">
        <el-aside style="width: 15%;min-width: 200px;">
            <div style="height: 35%;margin-top: 60px" id="blog_user_profile">
                <el-image
                    style="width: 100px; height: 100px;border-radius: 100%;margin-bottom: 15px;min-width: 100px;min-height: 100px"
                    :src="headImage"
                    fit="fill">
                </el-image>
                <p class="blog_p"><span>杜志华</span>同学</p>
                <p class="blog_p"><span>晚上好!</span>欢迎您</p>
                <router-link tag="button" to="/total" style="width: 70%; height: 45px;padding: 0;font-size: 18px" type="primary">进入个人中心</router-link>
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
            <el-header style="height: 10%;background-color: #eeeeee;padding: 0;display: flex;justify-content: center">
                <el-menu
                    default-active="1"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#eeeeee"
                    text-color="black"
                    active-text-color="red"
                    style="height: 100%;width: auto">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                    <el-menu-item index="5">订单管理</el-menu-item>
                </el-menu>
            </el-header>
            <el-main style="height: 90%;width: 100%;background-color: #f7f9fb;padding: 0">
                <el-container style="height: 100%;width: 100%">
                    <el-aside style="width: 80%; margin: 0">
                        <el-row type="flex" justify="space-around" style="margin: 20px 0">
                            <Preview class="msg_pre" style="border-top: #e97c62 solid 5px">
                                <span slot="pre_title">全站热点</span>
                            </Preview>
                            <Preview class="msg_pre" style="border-top: #5cae97 solid 5px">
                                <span slot="pre_title">信息发布</span>
                            </Preview>
                        </el-row>
                        <el-row type="flex" justify="space-around" style="margin: 20px 0">
                            <Preview class="msg_pre" style="border-top: #f8d0ab solid 5px">
                                <span slot="pre_title">校内交友</span>
                            </Preview>
                            <Preview class="msg_pre">
                                <span slot="pre_title">心灵树洞</span>
                            </Preview>
                        </el-row>
                        <el-row type="flex" justify="space-around" style="margin: 20px 0">
                            <Preview class="msg_pre">
                                <span slot="pre_title">失物招领</span>
                            </Preview>
                            <Preview class="msg_pre">
                                <span slot="pre_title">问题求解</span>
                            </Preview>
                        </el-row>
                    </el-aside>
                    <el-main style="width: 10%;background-color: #f7f9fb">
                        <div id="blog_contact">
                            <span style="font-size: 26px;">联系我们</span>
                            <el-divider></el-divider>
                            <ContactItem style="margin: 0 auto">
                                <img src="@/assets/img/qq.png" alt="" slot="ct_flag">
                                <span slot="ct_flag_in">QQ群</span>
                                <img src="@/assets/img/cart.png" alt="" slot="ct_flag_name">
                            </ContactItem>
                            <ContactItem style="margin: 50px auto">
                                <img src="@/assets/img/wechat.png" alt="" slot="ct_flag">
                                <span slot="ct_flag_in">微信群</span>
                                <img src="@/assets/img/cart.png" alt="" slot="ct_flag_name">
                            </ContactItem>
                        </div>
                    </el-main>
                </el-container>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Preview from "@/components/Preview";
import ContactItem from "@/components/ContactItem";

export default {
    name: "Blog",
    data() {
        return {
            headImage: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }
    },
    components: {
        ContactItem,
        Preview
    }
}
</script>
<style scoped>
#blog {
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
</style>

