<template>
  <div class="randImage">
    <span>pid: {{ data.pid }}</span>
      <a-image
          :width="200"
          :src="data.url"
          style="border-radius: 10px;"
      />
  </div>
</template>

<script setup>
  import {MICImageRandApi} from "@/api/image_api";
  import {reactive} from "vue";

  const data = reactive({
    "pid":0,
    "url":"",
  })

  async function MICri(){
    let res = await MICImageRandApi()
    data.pid = res.data.pid
    data.url = res.data.url
    console.log(data.url)
  }
  //加载随机图片
  MICri()

</script>

<style lang="scss">
  .randImage {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: cadetblue;
    width: 300px;
    border-radius: 10px;
    align-items: center;
  }
</style>