

<template>
  <div class="post" v-if="post">

    <div class="singe-time">
      <Time></Time>
    </div>
    <div class="singe-info">
      <h3>{{ post.title }}</h3>
      <hr>
      <div class="singe-text">
        <p class="pre" v-for="item in sinppet" :key="item" v-html="item"></p>
      </div>
    </div>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script setup>
//时间初始化和持续刷新
import {computed} from "vue";
import getPost from "@/composibles/getPost";

import Spinner from "@/components/Spinner.vue";
import Time from "@/components/web/Time.vue";

const props = defineProps({
  id: Number,
})

const {post, load} = getPost(props.id)


//限制文章
const sinppet = computed(() => {
  return post.value.content.split(',')
})

load()
</script>

<style lang="scss">
hr {
  color: #000000;
}
.singe-info{
  word-wrap: break-word;
  min-height: 40px;
  max-width: 900px;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 15px -3px #0000001a;
}
.singe-text{
  display: flex;
  flex-direction: column;
  width: 700px;
}
.singe-time{
  word-wrap: break-word;
  min-height: 40px;
  max-width: 335px;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 15px -3px #0000001a;
}
.tags a {
  margin-right: 10px;
}
.post {

  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  display: flex;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px
}
.pre {
  white-space: pre-wrap   ;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: wheat;
  margin-bottom: 3px;
  max-width: 400px;

}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #f80;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -20px;
  border-radius: 10px;
}
</style>