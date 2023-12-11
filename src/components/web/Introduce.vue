<!--自我介绍 -->
<script setup>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

</script>

<template>
  <div class='Introduce'>
    <img src="/img/Roy_乐2.png" class="img-roy" alt="头像">
    <h2>Roooyill</h2>
    <br>
    <div class="img">
      <div class="img"  style="font-size: 1rem;"><a href="https://github.com/RoyilEs" target="_blank">
            <img src="/img/github.png" alt="github" style="width: 30px; height: 30px;"></a></div>
      <div class="img" style="font-size: 1rem;"><a href="https://space.bilibili.com/49958282" target="_blank">
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