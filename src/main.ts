import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.less'
import '@ASS/css/tailwind.css'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
