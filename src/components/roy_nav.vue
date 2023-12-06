<template>
  <div class="nav">
    <div class="container">
      <div class="logo">
        <div>RoyのBlog</div>
      </div>
      <div class="left">
        <span><a href="/" class="router-link-active">首页</a></span>
        <span><a href="/" class="">傻瓜表情</a></span>
      </div>
      <div class="right">
        <span class="login_btn"><a href="">登录</a></span>
        <Roy_user_info></Roy_user_info>
      </div>
    </div>
  </div>
</template>

<script setup>
import Roy_user_info from "@/components/roy_user_info.vue";

</script>

<style lang="scss">
.nav {
  background-color: white;
  height: 60px;
  box-shadow: 1px 1px 5px #0003;
  display: flex;
  justify-content: center;
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
</style>