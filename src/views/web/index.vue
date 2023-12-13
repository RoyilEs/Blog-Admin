<template>

  <div class="base_view">
    <div class="base_container index_main">
        <div class="left-info">
          <div class="left-home">
            <PostList :posts="posts" />
          </div>
        </div>

        <div class="right-info">
          <div class="right-time">
            <Time></Time>
          </div>
          <div class="right-intr">
            <Introduce />
          </div>
          <div class="right_rand">
            <Rand_image></Rand_image>
          </div>
        </div>
      </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import PostList from "@/components/web/post_list.vue";
import Time from "@/components/web/Time.vue";
import Introduce from "@/components/web/Introduce.vue";
import getPosts from "@/composibles/getPosts";
import Rand_image from "@/components/rand_image.vue";

const { posts, load } = getPosts()

load()

</script>

<style lang="scss">
.image {
  width: 450px;
  height: 240px;
}

.base_view {
  display: flex;
  justify-content: center;
  align-items: center;

  .base_container {

    width: 1400px;
    display: flex;
    justify-content: space-around;
    min-height: 1000px;
  }
}
.index_main {
  .left-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 400px);
    min-height: 100vh;

  }

  .right-info{
    width: 360px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .right-time {

      word-wrap: break-word;
      min-height: 40px;
      padding: 13px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      background-color: #fff;
      box-shadow: 0 0 15px -3px #0000001a;
    }

    .layout {
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 30px;
      box-shadow: 0 0 15px -3px #0000001a;
    }

    .right-intr {
      word-wrap: break-word;
      min-height: 40px;
      padding: 20px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      background-color: #fff;
      box-shadow: 0 0 15px -3px #0000001a;


    }
    .right_rand {
      padding: 10px;
    }

  }

}



</style>