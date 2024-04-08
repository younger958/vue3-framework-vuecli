import { RouteRecordRaw } from "vue-router";
import { reactive } from "vue";
export const report =
    {
        path: "/report",
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
                    import(/* webpackChunkName: "report" */ "@/views/Report/page/Report.vue"),
            },
        ]
    } as RouteRecordRaw
