import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3, BOffcanvas, BContainer } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.component('b-offcanvas', BOffcanvas)
app.component('b-container', BContainer)
app.mount('#app')
