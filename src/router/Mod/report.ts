import { RouteRecordRaw } from "vue-router";
import { reactive } from "vue";
export const report =
    {
        path: "/report",
        redirect: '/report/report',
        name: "reportParent",
        meta: reactive({
            title: '报表'
        }),
        children: [
            {
                path: '/report/report',
                name: 'report',
                meta: reactive({ title: '报表' }),
                component: () =>
                    import(/* webpackChunkName: "report" */ "@/views/Report/Report.vue"),
            }, {
                path: '/report/production',
                redirect: '/report/production/production',
                name: 'productionParent',
                meta: reactive({ title: '生产' }),
                children: [
                    {
                        path: '/report/production/production',
                        name: 'production',
                        meta: reactive({ title: '生产' }),
                        component: () =>
                            import(/* webpackChunkName: "production" */ "@/views/Report/Production.vue"),
                    }
                ]
            },
        ]
    } as RouteRecordRaw
