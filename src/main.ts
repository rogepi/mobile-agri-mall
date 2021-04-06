import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import './assets/style/vant.theme.less'

const app = createApp(App)
app.use(Vant)
app.mount('#app')
