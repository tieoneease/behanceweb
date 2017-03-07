// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.behance.net/v2/',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    }
  
});''

//import Behance from 'behance-api'
//const Be = new Behance('TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH')

//const id = 'achen041bd2'
//const opts = {}

//Be.userProjects(id, opts, function(err, res, data) {
  //console.log(err)
      //console.dir(data);
//});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  template: '<App/>',
  components: { App }
})
Vue.prototype.$http = http
