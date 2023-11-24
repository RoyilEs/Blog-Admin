<template>
    <div class="roy_admin">
        <RoyAside></RoyAside>

        <div class="main">
        <header>
            <div class="left">
                <a-breadcrumb>
                    <a-breadcrumb-item>首页</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
                    <a-breadcrumb-item>用户列表</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <div class="right">
                <div class="icon_actions">
                  <i class="fa fa-home"></i>
                  <i v-if="theme" class="fa fa-sun-o" @click="setTheme"></i>
                  <i v-else class="fa fa-moon-o" @click="setTheme"></i>
                  <i class="fa fa-arrows-alt"></i>
                </div>
                  <RoyUserInfo :is-avatar="true"></RoyUserInfo>
              </div>
        </header>
        <div class="tabs"></div>
        <main>
          <div class="roy_view">
            <router-view></router-view>
          </div>

        </main>
    </div>
    </div>
    
</template>

<script setup>
import RoyAside from "@/components/admin/admin_aside.vue";
import RoyUserInfo from "@/components/roy_user_info.vue";

import {ref} from "vue";


  const theme = ref(true)

function setTheme() {
  theme.value = !theme.value
  if (theme.value) {
    //sun
    document.documentElement.classList.remove("dark")
  } else {
    //moon
    document.documentElement.classList.add("dark")
  }

}

</script>

<style lang="scss">
  .roy_admin {
    width: 100%;
    display: flex;
    .main {
        width: calc(100% - 240px);
        height: 100vh;
        overflow-y: auto;

        header {
            height: 60px;
            background-color: white;
            padding:0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;

          .right {
            display: flex;
            align-items: center;
          }

          .icon_actions {
            margin-right: 20px;
            i {
              margin-left: 10px;
              cursor: pointer;
              font-size: 16px;
              color: var(--text);
            }
            i:hover {
              color: var(--active);
            }
          }

          .avatar {
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
          .drop_menu {
            margin-left: 10px;
          }
        }
        .tabs {
            height: 30px;
            border-color: #f0eeee;
            border: solid;
            border-width: 0.5px 0 0.5px 0;
        }
        main {
           background-color: #f0eeee;
           padding: 20px;
          .roy_view {
            background-color: #fff;
          }
        }
    }
  }
</style>