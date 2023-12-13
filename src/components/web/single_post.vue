<template>
  <div class="post">
    <div class="article_content">
      <div class="post_left">
        <div class="title">
          <router-link :to="{ name: 'details', params: { id: post.id } }">
            <h3>{{ post.title }}</h3>

          </router-link>
        </div>
        <hr>
        <span>简介: {{ post.abstract }}</span>
          <p>{{ snippetContent }}</p>
          <span>字数:{{ post.word }}</span>
          <div style="padding-top: 34px" class="post_nickname">
            <h5>作者:{{ post.nickname }}</h5>
          </div>
      </div>

        <div class="post_right">
          <el-image
              :src="post.banner_path"
            class="post_img"
            :zoom-rate="1.2"
            :initial-index="0" fit="cover"
          >
          </el-image>
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
  return snippet(props.post.content, 30)
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
  width: 100%;
  justify-content: space-between;



      @media screen and (width >= 200px) {

        .comment-position {
          position: relative;
          width: 100%;
          max-width: 180px;
          padding-right: 20px;
        }

        .post_img {
          overflow: hidden;
          width: 170px;
          height: auto;
          object-fit: cover;
          object-position: top;
          border-radius: 12px 12px 12px 12px;
      }

        .info-block-photopage {
          width: auto;
        }
  }

  @media screen and (width < 200px) {

    .comment-position {
      position: relative;
      width: 100%;
    }

    .post_img {
      overflow: hidden;
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: top;
      border-radius: 12px 12px 12px 12px;
    }

    .info-block-photopage {
      width: 100%;
    }

  }

  .post_left {
    width: 100%;
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
h5 {
  font-size: 16px;
  color: #cbb696;
}


</style>