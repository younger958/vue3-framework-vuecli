<template>
  <div class="about">
    <el-button @click="plus(2)">我是 {{ addData.num}}</el-button>
    <demo1></demo1>
  </div>
</template>
<script lang="ts">
// import { login } from "@/api/login/login";
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { useAdd } from "@/hooks/demo/demo";
export default defineComponent({
  setup() {
    const data = reactive({
      option: {
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    })
    const { addData, plus } = useAdd()
    const init = async () => {
      // const res = await login({
      //   username: "111",
      //   password: "222",
      // });  
      // console.log(res);
      data.option.series[0].data[0] = 50
    };
    const demoRef = ref<any>(null)
    onMounted(() => {
      console.log('查看', demoRef.value);
    })
    return {
      init,
      demoRef,
      ...toRefs(data),
      addData, plus
    };
    
  },
});
</script>
