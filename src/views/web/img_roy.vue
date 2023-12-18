<template>
<div class="wrap">
  <div class="content" v-for="banner in banners.data" :key="banner">
    <a-image :src="banner.path" class="images" alt=""/>
    <div class="hide">
      <div class="hide-content">
        <h4 class="hide-name">{{  banner.name }}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
  import {reactive} from "vue";
  import {imageNameListApi} from "@/api/image_api";

  let banners = reactive({
    data :[
      {
        "id": 0,
        "name":"",
        "path": "/uploads/file/bsbr.jpg",
      }
    ]
  })

  async function getImage() {
    let res = await imageNameListApi()
    banners.data = res.data
  }

  getImage()
</script>

<style  lang="scss">
.wrap {
  width: 900px;

  margin: 100px auto;
}
.content {
  margin: 45px;
  overflow: hidden;
  float: left;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 15px;
}
.images {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s;
  border-radius: 15px;
}
.hide {
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0,0,0,0.5);
  transition: bottom 0.3s;
}
.hide-content {
  padding: 10px;

  .hide-name {
    color: white;
  }
}
.content:hover .hide {
  bottom: 0;
}
.content:hover .images {
  transform: scale(1.2);
}
</style>