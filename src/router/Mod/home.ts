import { reactive } from "vue";
import { RouteRecordRaw } from "vue-router";

export const home =
    {
        path: "/home",
        name: "home",
        meta: reactive({
            title: '首页'
        }),
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home/Overview.vue"),
        children: [
        ]
    } as RouteRecordRaw
