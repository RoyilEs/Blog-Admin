<template>
  <aside class="roy_aside">
  <div class="roy_aside_header flex">
    <div class="roy_aside_logo flex">
      <img src="/src/assets/img/Roy_乐2.png" alt="logo">
    </div>
    <div class="roy_aside_title">Roy后台系统</div>
  </div>
    <div class="roy_aside_body flex">

    </div>
  </aside>

</template>

<script setup>

</script>

<style scoped lang="scss">
  .roy_aside {
    width: 240px;
    height: 100vh;
    background-color: cadetblue;

    .roy_aside_header {
      width: 100%;
      height: 180px;
      flex-direction: column;
    }

    .roy_aside_logo {

      //background-color: #555555;
      padding: 10px;
      img {
        width: 100%;
        height: 110px;
      }

      //&::after {
      //  content: "logo图片";
      //  display: flex;
      //  color: #f0eeee;
      //}
    }
    .roy_aside_title {
      //margin-top: 20px;
      font-size: 20px;
      color: #f0eeee;
    }
  }
</style>