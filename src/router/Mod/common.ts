import { reactive } from "vue";
import { RouteRecordRaw } from "vue-router";

export const common: RouteRecordRaw[] =
    [{
        path: "/:pathMatch(.*)",
        name: "404",
        meta: reactive({
            title: '错误页面',
            hiddenSide: true,
            hiddenHeader: true,
            hidden: true,
            whitelist: true
        }),
        component: () =>
            import(/* webpackChunkName: "404" */ "@/views/Common/page/404.vue"),
        children: [
        ]
    },
    {
        path: '/',
        redirect: '/home'
    }] 
