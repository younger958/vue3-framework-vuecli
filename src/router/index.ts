import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { home } from "./Mod/home";
import { manage } from "./Mod/manage";
import { report } from "./Mod/report";
import { common } from "./Mod/common";

const routes: Array<RouteRecordRaw> = [
  ...common
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export const asyncRouter = [home, manage, report]
router;
