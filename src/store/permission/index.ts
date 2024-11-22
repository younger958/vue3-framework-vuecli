import { defineStore } from "pinia";
import { demo } from "@/api/demo";
const usePermission = defineStore('userInfo', {
    state: () => ({
        allowRoute: [] as string[],
        menuTree: [] as any[]
    }),
    getters: {
    },
    actions: {
        async getPage() {
            try {
                const res = await demo();
                console.log('执行了请求页面', res);
                this.allowRoute = res.payload
            } catch (error) {
                console.log('加载页面报错信息：', error);
            }
        }
    },
    // 全部持久化
    // persist:true,
    // 选择性持久化
    // persist: {

    // }
})
export default usePermission