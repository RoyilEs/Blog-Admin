<template>
    <div class="roy_admin">
        <aside>
            <i class="iconfont icon-shezhi"></i>
        </aside>
        <div class="main">
        <header>
            <div class="left">
                <a-breadcrumb>
                    <a-breadcrumb-item>首页</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
                    <a-breadcrumb-item>用户列表</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <div class="right"></div>
        </header>
        <div class="tabs"></div>
        <main></main>
    </div>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss">
  .roy_admin {
    width: 100%;
    display: flex;
    aside {
        width: 240px;
        height: 100vh;
        background-color: cadetblue;
    }
    .main {
        width: calc(100% - 240px);
        header {
            height: 60px;
            background-color: white;
            padding:0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .tabs {
            height: 30px;
            border: 1px solid #f0eeee;
        }
        main {
           background-color: #f0eeee; 
           height: calc(100vh - 90px);
        }
    }
  }
</style>