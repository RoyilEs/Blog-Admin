import axios from "axios";
import {useStore} from "@/stores/store";

//创建create的实例
export const Service = axios.create({
        timeout: 7000,
        headers: {
            "Content-Type": "application/json",
        }
})

//请求中间件
Service.interceptors.request.use(request => {
    // 用于用户的token
    // 拿到token
    const store = useStore()
    request.headers.token = store.userInfo.token
    return request
})

//相应中间件
Service.interceptors.response.use(response => {
    return response.data
})