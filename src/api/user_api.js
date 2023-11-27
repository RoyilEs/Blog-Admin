import {Service} from "@/services/service";


// 邮箱登录接口
export  function emailLoginApi(data) {
    return  Service.post("/api/email_login", data)
}
// 用户列表
export function userListApi(params) {
    return Service.get("/api/users", {params})
}
// 创建用户
export function userCreateApi(data) {
    return Service.post("/api/users", data)
}
// 删除用户 用户ID列表
export function userRemoveApi(id_list) {
    return Service.delete("/api/users", {data: {id_list}})
}

// 修改用户权限 昵称
export function userUpdateNicknameApi(data) {
    return Service.put("/api/user_update_role", data)
}

//登出
export function userLogoutApi() {
    return Service.get("/api/logout")
}