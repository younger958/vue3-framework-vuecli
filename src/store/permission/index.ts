import { defineStore } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { demo } from "@/api/demo";
const usePermission = defineStore('userInfo', {
    state: () => ({
        router: useRouter(),
        route: useRoute(),
        pageState: 4,
        allowPath: {
        } as { [key: string]: boolean }
    }),
    getters: {
        routerComputed(state) {
            return state.router.options.routes.filter(item => {
                return !item.meta?.hidden && item.meta?.whitelist;
            });
        },
        defaultActive(state) {
            return state.route.path;
        },
        computedHiddenSide(state) {
            return !!state.route.meta?.hiddenSide
        },
        computedHiddenHeader(state) {
            return !!state.route.meta?.hiddenHeader
        }
    },
    actions: {
        async getPage() {
            try {
                this.pageState = 2
                const res = await demo();
                console.log('执行了请求页面', res);
                this.router.options.routes.forEach(item => {
                    for (const iterator of Object.entries(res.payload)) {
                        if (item.name === iterator[0]) {
                            Object.assign(item.meta as any, { whitelist: true });
                        }
                        item.children?.forEach(childItem => {
                            if (childItem.name === iterator[0]) {
                                Object.assign(item.meta as any, { whitelist: true });
                                Object.assign(childItem.meta as any, { whitelist: true });
                            }
                        });
                    }
                });
                this.pageState = 1
            } catch (error) {
                this.pageState = 3
                console.log('加载页面报错信息：', error);

            }
        }
    }
})
export default usePermission