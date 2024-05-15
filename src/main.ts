import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createPinia } from 'pinia'


import router from "./routers"; // 추가
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount("#app"); // .use(router) 추가