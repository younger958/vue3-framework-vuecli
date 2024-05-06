<template>
    <div ref='echartsRef' :style="{ width: width, height: height }">
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, } from "vue";
import * as echarts from 'echarts'
export default defineComponent({
    props: {
        option: {
            type: Object,
            default: () => ({})
        },
        width: {
            type: String,
            default: "600px"
        },
        height: {
            type: String,
            default: '400px'
        }
    },
    setup(props) {
        let chart: any = null
        const echartsRef = ref(null)
        onMounted(() => {
            chart = echarts.init(echartsRef.value)
            chart.setOption(props.option);
        })
        watch(
            () => props.option,
            () => {
                chart.setOption(props.option);
            },
            { deep: true }
        )
        return {
            echartsRef
        }
    },
})


</script>