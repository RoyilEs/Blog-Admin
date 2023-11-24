import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { message } from "ant-design-vue";


//pinia 信息存储
export const useStore = defineStore('roy',  {
 state:() => {
   return {
     theme: true,
       userInfo: {
            username: '',
            nickname: '',
            role: 0,
            userID: 0,
            avatar: '',
            exp: 1700820131.2025821
       }
   }
 },
  actions: {
   //切换主题
   setTheme() {
       this.theme = !this.theme
     if (this.value) {
       //sun
       document.documentElement.classList.remove("dark")
       localStorage.setItem("theme", "light")
     } else {
       //moon
       document.documentElement.classList.add("dark")
       localStorage.setItem("theme", "dark")
     }
   },
    //加载主题
    loadTheme() {
     const theme = localStorage.getItem("theme")
      if (theme === null || theme === "light") {
          this.theme = true
      }
      if (theme === "dark") {
          document.documentElement.classList.add("dark")
          this.theme = false
      }
    },

    // 修改UserInfo
      setUserInfo(userInfo) {
          this.$patch({
              userInfo: userInfo
          })
          // 持久化
          localStorage.setItem("userInfo", JSON.stringify(userInfo))
      },
      loadUserInfo() {
          let info = localStorage.getItem("userInfo")
          if (info === null) {
              return
          }
          // json解析
          let userInfo = JSON.parse(info)

          // 判断时间是否失效
          let exp = userInfo.exp * 1000  //获取exp
          let newTime = new Date().getTime() //获取当前时间

          if ((exp - newTime) < 0) {
              //过期
              message.warn("登录信息已过期")
              return
          }
          this.setUserInfo(userInfo)
      }
  }
})
