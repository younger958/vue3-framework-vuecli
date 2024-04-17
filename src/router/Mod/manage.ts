import { reactive } from "vue";
import { RouteRecordRaw } from "vue-router";

export const manage =
    {
        path: "/manage",
        name: "manageParent",
        redirect: '/manage/mag',
        meta: reactive({
            title: '管理'
        }),
        children: [
            {
                path: '/manage/mag',
                name: 'manage',
                meta: reactive({ title: '管理' }),
                component: () =>
                    import(/* webpackChunkName: "manage" */ "@/views/Manage/page/Manage.vue"),
            },
        ]
    } as RouteRecordRaw
