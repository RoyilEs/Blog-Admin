
<template>
  <i v-if="store.theme" class="fa fa-sun-o" @click="setTheme"></i>
  <i v-else class="fa fa-moon-o" @click="setTheme"></i>
</template>

<script setup>

import {userStore} from "@/stores/store"

//实例化
const store = userStore()

store.loadTheme()

//true为 sun false为 moon
function setTheme() {
  store.setTheme()
}
</script>

<style scoped lang="scss">

</style>