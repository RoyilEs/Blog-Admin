<template>
  <div class="base_view">
    <Roy_nav></Roy_nav>
    <div class="container">
      <div class="left-info">

      </div>

      <div class="right-info">
        <div class="right-time">
          <Time></Time>
        </div>
        <div class="right-intr">
          <Introduce />
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import Time from "@/components/web/Time.vue";
import Introduce from "@/components/web/Introduce.vue";
import Roy_nav from "@/components/roy_nav.vue";


</script>

<style lang="scss">
.image {
  width: 450px;
  height: 240px;
}

.base_view {
  background-color: white;

  .container {
    width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .left-info {
    display: flex;
    flex-direction: column;
    width: 900px;
    min-height: 100vh;
  }

  .right-info {
    width: 350px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
  }
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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 15px -3px #0000001a;
  }
}


</style>