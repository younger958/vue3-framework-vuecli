import { createApp } from "vue";
import App from "./App.vue";
import { router, asyncRouter } from "./router";
import pinia from "./store";
import './style/index.less'
// console.log('查看当前环境',process.env.VUE_APP_TITLE);
import usePermission from "./store/permission";
import { RouteRecordRaw } from "vue-router";
(async () => {
    const app = createApp(App)
    app.use(pinia)
    const permission = usePermission();
    await permission.getPage();
    // console.log('查看', asyncRouter);
    // 生成菜单树
    const setMenu = (routes: RouteRecordRaw[], allowRoute: string[]) => {
        return routes.map(routeItem => {
            // 有子级进入子集进行筛选，没有子级直接筛选
            if (routeItem.children?.length) {
                // 对子级进行筛选
                // @ts-ignore
                routeItem.children = setMenu(routeItem.children, allowRoute)
                // 如果筛选后的子级存在长度，返回
                if (routeItem.children?.length) {
                    return routeItem
                } else {
                    return null
                }
            } else {
                if (allowRoute.includes(String(routeItem.name))) {
                    return routeItem
                } else {
                    return null
                }
            }
        }).filter(it => it !== null)
    }
    const menuTree = setMenu(asyncRouter, permission.allowRoute)
    // 存入pinia
    permission.menuTree = menuTree
    // 动态添加路由
    permission.menuTree.forEach(item => {
        router.addRoute(item)
    })
    app.use(router)
    app.mount('#app')
})()
