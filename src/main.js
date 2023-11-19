
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import "./assets/css/public.css"
import "@/assets/css/iconfont.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/theme.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(Antd).mount('#app')
