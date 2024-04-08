import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { home } from "./Mod/home";
import { manage } from "./Mod/manage";
import { report } from "./Mod/report";
import { common } from "./Mod/common";

const routes: Array<RouteRecordRaw> = [
  home,
  manage,
  report,
  ...common
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
