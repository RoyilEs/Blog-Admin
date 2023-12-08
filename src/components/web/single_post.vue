<template>
  <div class="post">
    <div class="title">
      <router-link :to="{ name: 'details', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
        <hr>
      </router-link>
    </div>
    <div class="article_content">
      <div class="post_left">
        <p>{{ snippetContent }}</p>
      </div>
      <div class="post_right">
        <a-image
            :width="120"
            :src="post.banner_path"
            style="border-radius: 10px;"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed} from "vue";
import {snippet} from "@/utils/content";

const props = defineProps({
  post: Object,
})

const snippetContent = computed(() => {
  return snippet(props.post.content, 80)
})
//单个文章主页展示
</script>

<style lang="scss">
.title {
  display: flex;
}

.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #a44242;
  border-radius: 10px 10px 10px 10px;
  background: transparent;
}

.article_content {
  display: flex;

  .post_right {
    position: relative;
    display: flex;
    margin-left: 35vh;

  }

  .post_left {
    width: 500px;
    display: flex;
    flex-direction: column;
  }
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: wheat;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  background: #f80;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
}
</style>