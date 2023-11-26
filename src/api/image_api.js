
//图片列表
import {Service} from "@/services/service";

export function imageListApi(params) {
    return Service.get("/api/images", {params})
}