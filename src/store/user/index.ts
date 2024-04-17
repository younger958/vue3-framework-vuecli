import { defineStore } from "pinia";
const userInfo = defineStore('userInfo', {
    state: () => ({
        username: 'demoname',
        password: 'demopwd',
        age: '12',
        sex: '111',
        address: 'demoaddress'
    })
})
export default userInfo