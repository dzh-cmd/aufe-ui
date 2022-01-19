// 创建路由器
import VueRouter from "vue-router";
import Index from "@/components/Index"
import Blog from "@/views/Blog";
import MsgTotal from "@/views/MsgTotal";
import MsgDetail from "@/views/MsgDetail";
import TopicDetail from "@/views/TopicDetail";
import PostMsg from "@/views/PostMsg";

const router = new VueRouter({
    // routes不能写成routers
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/blog',
            component: Blog,
        },
        {
            path: '/total',
            component: MsgTotal,
        },
        {
            path: '/detail',
            component: MsgDetail,
            children: [
                {
                    path: 'topic',
                    component: TopicDetail
                },
            ]
        },
        {
            path: '/postMsg',
            component: PostMsg,
        }
    ]
})
// 暴露出路由组件
export default router
