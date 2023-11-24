<template>
  <div class="login_bg">
    <div class="login_container">
      <div class="login_main">
        <div class="login_head">用户登录</div>
        <div class="login_form">

          <div class="login_form_item">
            <a-input  placeholder="User" v-model:value="data.username">
              <template #prefix>
                <i class="fa fa-user-o"></i>
              </template>
            </a-input>
          </div>

          <div class="login_form_item">
            <a-input type="password"  placeholder="Password"  v-model:value="data.password">
              <template #prefix>
                <i class="fa fa-key"></i>
              </template>
            </a-input>
          </div>

          <div class="login_form_item">
            <a-button type="primary" @click="emailLogin">登录</a-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {reactive} from "vue";
  import { message } from 'ant-design-vue';
  import { emailLoginApi } from "@/api/user_api";
  import { parseToken } from "@/utils/jwt";
  import { useStore } from "@/stores/store";
  import { useRoute, useRouter } from "vue-router";

  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  const data = reactive({
    username: "",
    password: "",
  })

  async function emailLogin() {
    if (data.username.trim() === "") {
      message.error("请输入用户名")
    }
    if (data.password.trim() === "") {
      message.error("请输入密码")
    }
    //返回信息为 原始jwt token 未解析
    let res = await emailLoginApi(data)
    if (res.code) {
      message.error(res.msg)
      return
    }
    //res.data就是 jwt的token 需要解码
    message.success(res.msg)
    let userInfo = parseToken(res.data)
    //存储用户token
    userInfo.token = res.data
    store.setUserInfo(userInfo)

    const redirect_url = route.query.redirect_url
    //登录成功只会进行跳转
    if (redirect_url === undefined) {
      //跳转到首页
      setTimeout(() => {
        router.push({name: "home"})
      }, 1000)
      return
    }

    //携带源路径登录成功会进行跳转
    setTimeout(() => {
      router.push({path: redirect_url})
    }, 1000)


  }
</script>

<style lang="scss">
  .login_bg {
    background: url("https://t.mwm.moe/pc/") 50%/cover no-repeat;
    width: 100%;
    height: 100vh;
  }
  .login_container {
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background-color: rgba(white, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    .login_main {
      width: 70%;
      .login_head {
        font-size: 23px;
        font-weight: 600;
        color: #1677ff;
        text-align: center;
        margin-bottom: 10px;
      }

      .login_form {
        .login_form_item {
          margin-bottom: 10px;
          .ant-btn {
            width: 100%;
          }
        }
      }
    }
  }



</style>