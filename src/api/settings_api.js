import {Service} from "@/services/service";


// 查看系统信息
export function settingsInfoApi(param) {
    return Service.get('/api/settings/' + param)
}