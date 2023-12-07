import {Service} from "@/services/service";


export function getMenuNameListApi() {
    return Service.get("/api/menus_names")
}