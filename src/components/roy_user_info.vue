<template>
  <div class="roy_user_info">
    <div class="avatar" v-if="props.isAvatar">
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
            <a-menu-item key="login">
              <a href="javascript:;">用户登录</a>
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
import {useRoute, useRouter} from "vue-router";
import {message} from "ant-design-vue";
import {userLogoutApi} from "@/api/user_api";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  //是否显示头像部分
  isAvatar : {
    type : Boolean,
    default : false
  }
})

function menuClick({key}) {
  //退出操作 其他跳转路由
  if (key === "logout") {
    let res = userLogoutApi()
    if (res.code) {
      message.error(res.msg)
      return
    }
    router.push({
      name: "login"
    })
    message.success(res.msg)
  }
  if (key === "login") {
    router.push({
      name: key,
      query: { //携带原路径跳转
        redirect_url : route.path
      }
    })
    return
  }
  //跳转路由
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