
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import ElementPlus from 'element-plus'
// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

import 'element-plus/dist/index.css'
import "./assets/css/public.css"
import "@/assets/css/iconfont.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/theme.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 引入v-md-editor预览组件
app.use(VMdPreview)


app.use(Antd).mount('#app')
