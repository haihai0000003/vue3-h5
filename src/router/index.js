import {  createRouter } from "vue-router"
import { history } from "./helper"

const Layouts = () => import("@/Layout/index.vue")
const Login = () => import("@/views/login/index.vue")
const Message = () => import("@/views/login/Message/index.vue")


export const constantRoutes = [
    {
        path: "/",
        component: Layouts,
        redirect: "/mine",
        children: [
            {
            path: "mine",
            component: () => import("@/views/mine/index.vue"),
            name: "Mine",
            meta: {
                title: "我的",
                affix: true,
                keepAlive: true
            }
            }
        ]
    },
    {
        path: "/login",
        component: Login,
        name: 'login',
        meta: {
            title: "手机号",
            keepAlive: true
        }
    },
    {
        path: "/login/message",
        component: Message,
        name: 'login_message',
        meta: {
            title: "验证码",
            keepAlive: false
        }
    }
]

const router = createRouter({
    history,
    routes: constantRoutes
  })

export default router