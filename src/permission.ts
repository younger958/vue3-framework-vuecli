import router from "@/router";
import { getToken } from "@/utils/auth";
router.beforeEach((to, from, next) => {
    console.log('每次都执行，11');
    
    if (getToken()) {
        next()
    } else {
        next()
    }
})