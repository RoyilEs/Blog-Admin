<template>
<div class="base_container">
  <div class="tag">
    <div class="img-div">
      <div class="info">
        <div class="img_roy"><img src="src\assets\roy\Roy_乐.png" alt="乐"></div>
      </div>
      <div class="info">
        <div class="img_roy"><img src="src\assets\roy\Roy_乐2.png" alt="乐2"></div>
      </div>
      <div class="info">
        <div class="img_roy"><img src="src\assets\roy\Roy_无语.png" alt="无语"></div>
      </div>
      <div class="info">
        <div class="img_roy"><img src="src\assets\roy\Roy_看书.png" alt="看书" style="height: -30px;"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style  lang="scss">
.base_container {
  width: 1400px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  min-height: 1000px;
}
.info {
  display: flex;
  margin: 30px 16px 0px 20px;
}

.img-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tag {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 2000px;
}

.img_roy {
  border-radius: 35px;
  background-color: beige;
  width: 240px;
  word-wrap: break-word;
  min-height: 40px;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px -3px #0000001a;
  display: flex;
  margin: 30px 16px 0px 20px;
}
</style>