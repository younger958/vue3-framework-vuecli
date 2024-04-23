
// 不一定非要添加elment的组件，凡是打包无法被识别的，都可以添加进来试试
export { }
declare global {
    const ElMessage: (typeof import('element-plus'))['ElMessage']
    const ElMessageBox: (typeof import('element-plus'))['ElMessageBox']
    const ElLoading: (typeof import('element-plus'))['ElLoading']
}
