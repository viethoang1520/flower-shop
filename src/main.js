import '@/assets/sass/app.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia';

// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia();

app.use(router)

app.use(pinia);

app.mount('#app')
app.use(Notifications)