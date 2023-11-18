import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('roy',  {
 state:() => {
   return {
     theme: true
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
    }
  }
})
