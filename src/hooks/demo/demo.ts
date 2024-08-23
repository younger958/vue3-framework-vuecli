import { reactive } from 'vue'
export function useAdd() {
    const data = reactive({
        num: 1
    })
    const plus = (val = 1) => {
        data.num += val
    }
    return {
        addData: data,
        plus
    }
}