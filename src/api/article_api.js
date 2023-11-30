import {Service} from "@/services/service";


// 文章列表
export function articleListApi(params) {
    return Service.get("/api/articles", {params})
}
// 文章内容列表
export function articleContentListApi() {
    return Service.get("/api/article_content_list")
}
// 创建文章
export function articleCreateApi(data) {
    return Service.post("/api/articles", data)
}

// 删除文章
export function articleRemoveApi(id_list) {
    return Service.delete("/api/articles/", {data: {id_list}})
}

// 更新文章
export function articleUpdateApi(data, id) {
    return Service.put("/api/articles/?id="+id, data)
}