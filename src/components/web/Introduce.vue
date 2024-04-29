<!--自我介绍 -->
<script setup>

import getAdmin from "@/composibles/getAdmin";


const admin = "admin"

const {post, load} = getAdmin(admin)
console.log(post)


load()
</script>

<template>
  <div class='Introduce'>
    <img :src="post.avatar"  class="img-roy" alt="头像">
    <h2>{{ post.username }}</h2>
    <br>
    <div class="img">
      <div class="img"  style="font-size: 1rem;"><a :href="post.github" target="_blank">
            <img src="/img/github.png" alt="github" style="width: 30px; height: 30px;"></a></div>
      <div class="img" style="font-size: 1rem;"><a :href="post.bilibili" target="_blank">
            <img src="/img/bilibiliLogo.png" alt="bilibli" style="width: 30px; height: 30px;"></a></div>
    </div>
  </div>
</template>


<style scoped>
  h2 {
    text-align: center;
  }
  .img-roy {
    width: 240px;
    background-color: bisque;
    border-radius: 80px;
  }
  .img {
    display: flex;
    align-content: center;
    align-items: center;
    text-decoration: none;
    color: gray;
    margin-top: -5px;
    margin-right:10px;
    font-size: 20px;
  }
</style>