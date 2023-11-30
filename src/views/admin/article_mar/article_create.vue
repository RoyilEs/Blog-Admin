<template>
  <div class='create'>
    <form @submit.prevent="handlerSubmit">
      <label for="title">标题</label>
      <input type="text" v-model="formState.title" required />
      <label for="title">介绍</label>
      <input type="text" v-model="formState.abstract" required />
      <label for="content">内容</label>
      <textarea v-model="formState.content"></textarea>
      <label for="title">分类</label>
      <input type="text" v-model="formState.category" required />
      <label for="title">图片 请输入ID</label>
      <input type="text" v-model="formState.banner_id" required />
      <!-- 显示图片-->
      <div v-for="banner in banners.data" :key="banner" class="pill">
        <span>ID: {{ banner.id }}</span>
        <a-image :width="50" :src="banner.path" style="border-radius: 10px;"/>
      </div>
      <div>
        <a-button type="primary" @click="handlerSubmit">添加</a-button>
      </div>
    </form>
  </div>
</template>

<script setup>

import {reactive} from "vue";
import {articleCreateApi} from "@/api/article_api";
import {message} from "ant-design-vue";
import {imageNameListApi} from "@/api/image_api";
import router from "@/router";

let banners = reactive({
  data :[
    {
      "id": 0,
      "path": "/uploads/file/bsbr.jpg",
    }
  ]
})

const formState = reactive({
      "title":"",
      "abstract":"",
      "content":"",
      "category":"",
      "banner_id": null,
    }
)


async function getImage() {
  let res = await imageNameListApi()
  banners.data = res.data
}

async function handlerSubmit() {

 try {
   formState.banner_id = Number(formState.banner_id)
   let res = await articleCreateApi(formState)
   if (res.code) {
     message.success(res.msg)
     return
   }
   message.success(res.msg)
   await router.push("/admin/article_list")
 } catch (e) {

 }
}

getImage()
</script>

<style lang="scss">
form {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  margin-bottom: 10px;
}
textarea {
  height: 160px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>