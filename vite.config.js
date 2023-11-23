import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'


//前端使用环境变量
// https://vitejs.dev/config/
export default ({mode}) => {
    const env = loadEnv(mode, process.cwd())
    const VITE_API = env.VITE_API
     return defineConfig({
       envPrefix: ["VITE_"],
       plugins: [
         vue(),
       ],
       resolve: {
         alias: {
           '@': fileURLToPath(new URL('./src', import.meta.url))
         },
       },
       server: {
         //代理
         proxy: {
           '/uploads': {
             target: VITE_API,
           },
             //通过代理直接跳过跨域请求
           '/api': {
               target: VITE_API,
           }
         }
       }
     })
}


