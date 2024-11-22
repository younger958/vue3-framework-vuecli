<template>
  <div class="common-layout">
    <el-container>
      <el-header class="app_header">
        <div>头部</div>
      </el-header>
      <el-container class="app_container">
        <div class="container_left">
          <el-aside width="200px">
            <el-menu router :default-active="route.path">
              <template
                v-for="(routerItem, index) in permission.menuTree"
                :key="index"
              >
                <menu-item :route="routerItem"></menu-item>
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
import { defineComponent } from "vue";
import usePermission from "@/store/permission";
import { useRoute } from "vue-router";
import MenuItem from "@/components/common/MenuItem.vue";
export default defineComponent({
  name: "HomeView",
  components: { MenuItem },
  setup() {
    // let loading: any = null;
    const permission = usePermission();
    const route = useRoute();
    return { permission, route };
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
  background-color: antiquewhite;
}
</style>
