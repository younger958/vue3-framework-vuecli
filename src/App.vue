<template>
  <div class="common-layout">
    <el-container>
      <el-header class="app_header">
        <div>头部</div>
      </el-header>
      <el-container class="app_container">
        <div class="container_left">
          <el-aside width="200px">
            <el-menu
              router
              :default-active="defaultActive"
              class="el-menu-vertical-demo"
            >
              <template
                v-for="(routerItem, index) in routerComputed"
                :key="index"
              >
                <el-sub-menu
                  v-if="routerItem.children?.length"
                  :index="routerItem.path"
                >
                  <template #title>
                    <span>{{ routerItem.meta?.title }}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item
                      v-for="(childItem, childIndex) in routerItem.children"
                      :key="childIndex"
                      :index="childItem.path"
                      >{{ childItem.meta?.title }}</el-menu-item
                    >
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item v-else :index="routerItem.path">
                  <span>{{ routerItem.meta?.title }}</span>
                </el-menu-item>
              </template>
            </el-menu>
          </el-aside>
        </div>
        <el-main class="container_right"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log("route", route);

    const fetchData = () => {
      return new Promise<{ payload: any }>(resolve => {
        setTimeout(() => {
          const data = {
            payload: {
              home: true,
              manage: true,
            },
          };
          resolve(data);
        }, 1000);
      });
    };
    const init = async () => {
      const res = await fetchData();
      router.options.routes.forEach(item => {
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
    };
    const routerComputed = computed(() => {
      return router.options.routes.filter(item => {
        return !item.meta?.hidden && item.meta?.whitelist;
      });
    });
    const defaultActive = computed(() => {
      return route.path;
    });
    init();
    return {
      defaultActive,
      routerComputed,
    };
  },
});
</script>
<style lang="less">
@import "./assets/style/index.less";
#app {
  width: 100%;
  height: 100%;
}
.app_header {
}
</style>
