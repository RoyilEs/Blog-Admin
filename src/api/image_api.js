

import {Service} from "@/services/service";

//图片列表
export function imageListApi(params) {
    return Service.get("/api/images", {params})
}

//图片名称列表
export function imageNameListApi() {
    return Service.get("/api/images_names")
}

//图片编辑
export function imageUpdateApi(data) {
    return Service.put("/api/images", data)
}

//图片删除
export function imageRemoveApi(id_list) {
    return Service.delete("/api/images/", {data: {id_list}})
}

// MIC图库随机获取
export function MICImageRandApi() {
    return Service.get("/api/imageAll_one")
}