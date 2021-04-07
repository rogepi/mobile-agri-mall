import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import './assets/style/vant.theme.less'
import './assets/style/tailwind.css'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
