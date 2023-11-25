import {Service} from "@/services/service";

export function dataSumApi() {
    return Service.get("/api/data_sum")
}