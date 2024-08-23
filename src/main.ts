import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import './style/index.less'
// console.log('查看当前环境',process.env.VUE_APP_TITLE);
// import pinia from "pinia";

createApp(App).use(pinia).use(router).mount("#app");
