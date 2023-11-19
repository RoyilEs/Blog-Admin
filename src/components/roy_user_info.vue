<template>
  <div class="roy_user_info">
    <div class="avatar">
      <img src="/src/assets/img/头像.jpg" alt="头像">
    </div>

    <div class="drop_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          Hover me
          <i class="fa fa-angle-down"></i>
        </a>
        <template #overlay>
          <a-menu @click="menuClick">
            <a-menu-item key="user_center">
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item key="article_list">
              <a href="javascript:;">文章列表</a>
            </a-menu-item>
            <a-menu-item key="logout">
              <a href="javascript:;">注销退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function menuClick({key}) {
  //退出操作 其他跳转路由
  if (key === "logout") {
    console.log("logout")
    return
  }
  router.push({
    name: key
  })
}
</script>

<style>
  .roy_user_info {
    display: flex;
    align-items: center;
  }
</style>