<template>
<router-view></router-view>
  <div class="bg_img"></div>
</template>

<script setup>

</script>


<style scoped lang="scss">
.bg_img{
  background-image: url("src/assets/img/back-roy1.png");
  background-size: cover;
  background-attachment: scroll;
  background-repeat: no-repeat;
  min-width: 100%;
  min-height: 100%;
  z-index: -99;
  position: fixed;
  top: 0;
  opacity: .5;
  transition: opacity 1s linear;}
</style>