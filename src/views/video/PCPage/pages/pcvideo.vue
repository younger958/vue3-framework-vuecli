<template>
  <div class="about">
    <div class="left">
      <vue3videoPlay v-bind="options"></vue3videoPlay>
    </div>
    <div class="right">
      列表
      <ul class="infinite-list" style="overflow: auto">
        <li
          v-for="i in count"
          :key="i"
          :class="currentI === i ? 'infinite-list-item' : ''"
          @click="paly(i)"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" >
// @ts-ignore
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css";
import { defineComponent, reactive, toRefs } from "vue";
import { list } from "@/api/video/list";
export default defineComponent({
  components: { vue3videoPlay },
  setup() {
    let options = reactive({
      width: "100%", //播放器高度
      height: "100%", //播放器高度
      color: "#409eff", //主题色
      title: "", //视频名称
      src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
      muted: false, //静音
      webFullScreen: false,
      speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
      autoPlay: false, //自动播放
      loop: false, //循环播放
      mirror: false, //镜像画面
      ligthOff: false, //关灯模式
      volume: 0.3, //默认音量大小
      control: true, //是否显示控制
      currentTime: 0, //跳转到固定播放时间
      controlBtns: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
      ], //显示所有按钮,
    });
    const data = reactive({
      count: [],
      currentI: "",
    });
    const init = async () => {
      const res = await list();
      data.count = res;
    };
    const paly = (i: string) => {
      console.log(i);
      data.currentI = i;
      options.src = "/video/" + i;
    };
    init();
    return {
      options,
      ...toRefs(data),
      paly,
    };
  },
});
</script>
<style lang="less">
.about {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    height: 100%;
    width: 65%;
  }
  .right {
    height: 100%;
    width: 35%;
  }
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
  