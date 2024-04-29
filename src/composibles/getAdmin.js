import {settingsInfoApi} from "@/api/settings_api";
import {ref} from "vue";


const getAdmin = (param) => {
    const post = ref({})

    const load = async () => {
        try {
            let { data } = await  settingsInfoApi(param)
            post.value = data
        } catch (e) {
            console.log(e)
        }
    }
    load()

    return {
        post,
        load
    }
}

export default getAdmin