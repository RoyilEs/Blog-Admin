import {ref} from "vue";
import {articleContentDetailApi} from "@/api/article_api";

const getPost = (id) => {
    const post = ref({})

    const load = async () => {
        try {
            let {data} = await articleContentDetailApi(id)
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
export default getPost