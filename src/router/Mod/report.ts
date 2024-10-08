import { RouteRecordRaw } from "vue-router";
import { reactive } from "vue";
export const report =
    {
        path: "/report",
        redirect: '/report/rep',
        name: "reportParent",
        meta: reactive({
            title: '报表'
        }),
        children: [
            {
                path: '/report/rep',
                name: 'report',
                meta: reactive({ title: '报表' }),
                component: () =>
                    import(/* webpackChunkName: "report" */ "@/views/Report/Report.vue"),
            },
        ]
    } as RouteRecordRaw
