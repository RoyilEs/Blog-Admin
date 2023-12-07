<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
      <hr>
    </router-link>
    <p>{{ snippetContent }}</p>
  </div>
</template>

<script setup>

import {computed} from "vue";
import {snippet} from "../../utils/content";

const props = defineProps({
  post: Object,
})

const snippetContent = computed(() => {
  return snippet(props.post.content, 80)
})
//单个文章主页展示
</script>

<style lang="scss">
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #a44242;
  border-radius: 10px 10px 10px 10px;
  background: transparent;

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