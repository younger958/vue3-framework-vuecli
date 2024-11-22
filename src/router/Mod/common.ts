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
            commonPage: true,

        }),
        component: () =>
            import(/* webpackChunkName: "404" */ "@/views/Common/404.vue"),
    },
    {
        path: '/',
        redirect: '/home'
    }] 
