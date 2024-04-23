<template>
  <div class="common-layout">
    <el-container v-if="permission.pageState === 1">
      <el-header class="app_header" v-if="!permission.computedHiddenHeader">
        <div>头部</div>
      </el-header>
      <el-container class="app_container">
        <div class="container_left" v-if="!permission.computedHiddenSide">
          <el-aside width="200px">
            <el-menu
              router
              :default-active="permission.defaultActive"
              class="el-menu-vertical-demo"
            >
              <template
                v-for="(routerItem, index) in permission.routerComputed"
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
import { defineComponent, watch } from "vue";
import usePermission from "@/store/permission";
export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    let loading: any = null;
    const permission = usePermission();
    watch(
      () => permission.pageState,
      n => {
        if (n === 2) {
          loading = ElLoading.service({
            lock: true,
            fullscreen: true,
            text: "正在加载...",
            background: "rgba(255, 255, 255, 1)",
          });
        } else if (loading) {
          loading.close();
        }
      },
    );
    permission.getPage();
    return { permission };
  },
});
</script>
<style lang="less">
@import "./assets/style/index.less";
#app {
  width: 100%;
  height: 100%;
}
.common-layout {
  width: 100%;
  height: 100%;
  .el-container{
    width: 100%;
  height: 100%;
    .app_container {
    width: 100%;
    height: 100%;
    .container_right {
      width: 100%;
      height: 100%;
    }
    .el-main {
      padding: 0;
    }
  }
  }
  
}
</style>
