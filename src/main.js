// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//let API_URL = 'https://localhost:' + process.env.PORT ? process.env.PORT : 3001
let API_URL = 'https://ashchenapi.herokuapp.com/'

let http = axios.create({ baseURL: API_URL })

Vue.config.productionTip = false
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
