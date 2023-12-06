
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import "./assets/css/public.css"
import "@/assets/css/iconfont.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/theme.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)


app.use(Antd).mount('#app')
