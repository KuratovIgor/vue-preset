import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconTemplate from '@/components/common/IconTemplate.vue'
import 'virtual:svg-icons-register'
import 'virtual:fonts.css'


import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/styles/index.scss'

const app = createApp(App)

app.component('IconTemplate', IconTemplate)

app.use(createPinia())

app.use(ElementPlus)

app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
