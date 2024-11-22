<template>
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <span>{{ route.meta?.title }}</span>
    </template>
    <el-menu-item-group>
      <template
        v-for="(childItem, childIndex) in route.children"
        :key="childIndex"
      >
        <menu-item :route="childItem"></menu-item>
      </template>
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <span>{{ route.meta?.title }}</span>
  </el-menu-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
export default defineComponent({
  name: "menuItem",
  props: {
    route: {
      type: Object as PropType<RouteRecordRaw>,
      required: true,
    },
  },
});
</script>
