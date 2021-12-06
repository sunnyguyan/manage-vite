import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from 'axios';
import config from './config'
import request from './utils/request'
import api from './api'
import store from './store'
import * as icons from '@element-plus/icons'

const app=createApp(App);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;

Object.keys(icons).forEach(key=>{
    app.component(key,icons[key])
})

app.use(store).use(ElementPlus).use(router).mount('#app')
