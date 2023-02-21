import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconTemplate from '@/components/common/IconTemplate.vue'
import 'virtual:svg-icons-register'
import 'virtual:fonts.css'


import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import '@/styles/index.scss'

const app = createApp(App)

app.component('IconTemplate', IconTemplate)

app.use(createPinia())

app.use(ElementPlus)

app.use(router)

app.mount('#app')
