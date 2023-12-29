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
                affix: true
            }
            }
        ]
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/login/message",
        component: Message
    }
]

const router = createRouter({
    history,
    routes: constantRoutes
  })

export default router