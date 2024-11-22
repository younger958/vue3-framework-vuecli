import { reactive } from "vue";
import { RouteRecordRaw } from "vue-router";

export const manage =
    {
        path: "/manage",
        name: "manageParent",
        redirect: '/manage/manage',
        meta: reactive({
            title: '管理'
        }),
        children: [
            {
                path: '/manage/manage',
                name: 'manage',
                meta: reactive({ title: '管理' }),
                component: () =>
                    import(/* webpackChunkName: "manage" */ "@/views/Manage/Manage.vue"),
            }, {
                path: '/manage/test',
                name: 'test',
                meta: reactive({ title: '测试' }),
                component: () =>
                    import(/* webpackChunkName: "test" */ "@/views/Manage/Test.vue"),
            },
        ]
    } as RouteRecordRaw
