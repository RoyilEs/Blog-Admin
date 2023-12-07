import {ref} from "vue";
import {articleContentListApi} from "@/api/article_api";

const getPosts = () => {
    const posts = ref([])

    const load = async () => {
        try {
            let {data} = await articleContentListApi()
            posts.value = data
        } catch (e) {
            console.log(e)
        }
    }
    load()

    return {
        posts,
        load
    }
}

export default getPosts