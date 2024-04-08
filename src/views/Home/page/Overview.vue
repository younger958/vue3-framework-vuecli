<template>
  <div class="about">
    <el-button @click="init">我是 home</el-button>
  </div>
</template>
<script lang="ts" >
import { login } from "@/api/login/login";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const init = async () => {
      const res = await login({
        username: "111",
        password: "222",
      });
      console.log(res);
     
    };
    return {
      init,
    };
  },
});
</script>
