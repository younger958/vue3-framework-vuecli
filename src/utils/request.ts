import axios from "axios";
import { getToken } from "./auth";
/**
 * 创建一个axios实例
 */
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

/**     
 * 添加请求拦截器
 */
instance.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['x-token'] = getToken()
        }
        return config
    },
    (err) => {
        console.log(err) // for debug
        return Promise.reject(err)
    }
)
/** 
 * 添加响应拦截器
 */
instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
/**
 * 封装get
 */
export async function get<T = any>(url: string, params?: any): Promise<T> {
    return instance.get(url, { params })
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}
/**
 * 封装POST 
 */
export async function post<T = any>(url: string, data?: any): Promise<T> {
    return instance.post(url, data)
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}