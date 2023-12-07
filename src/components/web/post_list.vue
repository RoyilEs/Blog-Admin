<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" class="left-block"/>
    </div>
  </div>
</template>

<script setup>
import SinglePost from "@/components/web/single_post.vue";



defineProps({
  posts: Array,
})
</script>

<style scoped lang="scss">
.left-block {
  word-wrap: break-word;
  min-height: 40px;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 15px -3px #0000001a;
}
</style>