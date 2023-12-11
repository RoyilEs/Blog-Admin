<template>
  <div :class="{
    nav: true,
    show: data.is_show
  }">
    <div class="nav_container">
      <div class="logo">
        <div>RoyのBlog</div>
      </div>
      <div class="left">
        <span
            v-for="item in data.menuNameList" :key="item.id">
          <router-link :to="item.path">{{ item.menu_title }}</router-link></span>
      </div>
      <div class="right">
        <span class="login_btn" v-if="store.userInfo.role === 0"><a href="/login">登录</a></span>
        <Roy_user_info v-if="store.userInfo.role !== 0"></Roy_user_info>
      </div>
    </div>
  </div>
</template>

<script setup>
import Roy_user_info from "@/components/roy_user_info.vue";

import {useStore} from "@/stores/store";
import {reactive, ref} from "vue";
import {getMenuNameListApi} from "@/api/menu_api";

const props = defineProps({
  is_show: {
    type: Boolean,
    default: false,
  }
})

const data = reactive({
  is_show: false,
  menuNameList: [],
})

async function getInit() {
  let res = await getMenuNameListApi() //所有菜单名字与路径数据
  data.menuNameList = res.data

  if (props.is_show) {
    data.is_show = true
  } else {
    //监听滚动事件
    window.addEventListener("scroll",  scroll)
  }
}

const store = useStore()

function scroll() {
  let top = document.documentElement.scrollTop
  data.is_show = top >= 200;
}


getInit()
</script>

<style lang="scss">


.nav {
  position: fixed;
  top: 0;
  width: 100%;
  //background-color: white;
  //box-shadow: 1px 1px 5px #0003;
  height: 60px;
  display: flex;
  justify-content: center;
  z-index: 10;
  transition: all 0.5s;


  .nav_container {
    width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    width: 10%;
    div:first-child {
      font-size: 20px;
    }
  }
  .left {
    width: 50%;
    display: flex;
    span {
      margin-right: 20px;
    }
    a {
      color: #1677ff;

      &:hover {
        color: var(--bg);
      }

      &.router-link-exact-active {
        color: brown;
      }
    }
  }
  .right {
    width: 40%;
    display: flex;
    justify-content: right;
    align-items: center;

    .login_btn {
      margin-right: 20px;
    }
  }
}

.nav.show {
  background-color: white;
  box-shadow: 1px 1px 5px #0003;
  a {
    color: #1677ff;
  }
}
</style>