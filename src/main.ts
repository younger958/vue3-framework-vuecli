import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './permission'
console.log('查看当前环境',process.env.VUE_APP_TITLE);

createApp(App).use(router).mount("#app");
