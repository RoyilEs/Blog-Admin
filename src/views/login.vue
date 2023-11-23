<template>
  <div class="login_bg">
    <div class="login_container">
      <div class="login_main">
        <div class="login_head">用户登录</div>
        <div class="login_form">

          <div class="login_form_item">
            <a-input  placeholder="User">
              <template #prefix>
                <i class="fa fa-user-o"></i>
              </template>
            </a-input>
          </div>

          <div class="login_form_item">
            <a-input type="password"  placeholder="Password">
              <template #prefix>
                <i class="fa fa-key"></i>
              </template>
            </a-input>
          </div>

          <div class="login_form_item">
            <a-button type="primary">登录</a-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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