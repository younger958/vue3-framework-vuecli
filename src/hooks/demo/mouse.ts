import { reactive, onMounted, onUnmounted } from 'vue'
export function useMouse() {
    const data = reactive({
        x: 0,
        y: 0
    })
    const update = (event: any) => {
        data.x = event.pageX
        data.y = event.pageY
    }
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    
}