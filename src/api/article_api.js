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