<template>
    <el-container id="detail" style="background: rgba(247,248,250, 1)">

        <el-header id="detail_header" height="80px">
            <el-row style="width: 100%;height: 100%;">
                <el-col :span="6" style="height: 100%;z-index: 1000">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :span="12" style="height: 100%;z-index: 1000">
                    <el-row type="flex" style="height: 100%" justify="center" align="middle">
                        <el-button plain icon="el-icon-back">返回</el-button>
                        <el-button @click="postMsg()" plain icon="el-icon-edit">去发帖</el-button>
                        <el-button plain icon="el-icon-share">分享本贴</el-button>
                        <el-button @click="drawer = true" plain icon="el-icon-edit-outline">发表评论</el-button>
                        <el-button @click="collection" v-if="!isCollection" plain icon="el-icon-star-off">收藏</el-button>
                        <el-button @click="collection" v-else plain icon="el-icon-star-on">取消收藏</el-button>
                        <el-button @click="follow" v-if="!isFollow" plain icon="el-icon-user">关注博主</el-button>
                        <el-button @click="follow" v-else plain icon="el-icon-user-solid">取消关注</el-button>
                    </el-row>
                </el-col>
                <el-col :span="6" style="height: 100%;z-index: 1000">
                    <el-link :underline="false" icon="el-icon-s-custom"
                             style="font-size: 22px;margin: auto 20px;line-height: 80px">个人中心
                    </el-link>
                    <el-link :underline="false" style="font-size: 22px;line-height: 80px">退出登录<i class="el-icon-right" style="margin-left: 0"></i>
                    </el-link>
                </el-col>
            </el-row>
        </el-header>

        <el-row style="width: 100%;height: 100%;position: relative">

            <el-col :span="9" style="height: 100%;border-right: #e97c62 solid 5px;overflow-y: auto;padding-top: 15px">

                <el-row style="height: auto;min-height: 100px;font-size: 22px;text-indent: 2rem;">
                    <p>【通知】2022年图书馆寒假服务时间2022年图书馆寒假服务时间</p><br>
                    <span class="el_span">发帖人: 爱打呼噜的猫</span>
                    <span class="el_span">浏览量: 23</span>
                    <span class="el_span">回复量: 24</span>
                    <span class="el_span">发表时间: 20201-12-23</span>
                </el-row>

                <el-divider style="padding: 0"></el-divider>

                <el-row style="text-indent: 2rem;padding: 0 10px">
                    <p>累加数 是一个字符串，组成它的数字可以形成累加序列。
                        一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
                        给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。
                        说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
                        来源：力扣（LeetCode）
                        链接：https://leetcode-cn.com/problems/additive-number
                        著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p>
                </el-row>
            </el-col>
            <el-col :span="15" style="position: absolute;top:0;right: 0;bottom: 0;overflow-y: auto;">
                <el-row type="flex" justify="center">
                    <Comment style="width: 80%"></Comment>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-pagination
                        background
                        style="margin-bottom: 50px"
                        layout="prev, pager, next"
                        :total="10">
                    </el-pagination>
                </el-row>
            </el-col>
        </el-row>

        <el-drawer
            title="在此处发表评论"
            :visible.sync="drawer">
            <span>我来啦!</span>
        </el-drawer>

    </el-container>
</template>
<script>
import Preview from "@/components/Preview";
import TopicDetail from "@/views/TopicDetail";
import Comment from "@/views/Comment";

export default {
    name: "MsgDetail",
    components: {
        TopicDetail,
        Preview,
        Comment
    },
    data() {
        return {
            isCollection: false,
            isFollow: false,
            activeName: "first",
            isShowAll: true,
            drawer: false,
        }
    },
    methods: {
        collection() {
            this.isCollection = !this.isCollection;
        },
        follow() {
            this.isFollow = !this.isFollow;
        },
        postMsg(){
            this.$router.push('/postMsg');
        }
    }
}
</script>
<style scoped>

#detail {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.el-breadcrumb {
    font-size: 16px;
    line-height: 80px;
}

.el_span{
    font-size: 14px;
    padding: 0 10px;
}

.t_b{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
