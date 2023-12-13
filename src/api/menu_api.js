import {Service} from "@/services/service";

// 获取菜单web展示
export function getMenuNameListApi() {
    return Service.get("/api/menus_names")
}
// 获取菜单所有信息
export function getMenuListApi(params) {
    return Service.get("/api/menus", {params})
}

// 创建菜单
export function menuCreateApi(data) {
    return Service.post("/api/menus", data)
}

// 删除菜单
export function menuRemoveApi(id_list) {
    return Service.delete("/api/menus", {data: {id_list}})
}

// 更新菜单
export function menuUpdateApi(data, id) {
    return Service.put("/api/menus/" + id, data)
}
