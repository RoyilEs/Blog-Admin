import axios from "axios";

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
    return request
})

//相应中间件
Service.interceptors.response.use(response => {
    return response.data
})