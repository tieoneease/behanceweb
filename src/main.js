// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//import Behance from 'behance-api'
//const Be = new Behance('TC4iMKLEasvhlXHID8WE4Wg7cLBNHPIH')

const id = 'achen041bd2'
const opts = {}
//Be.projects({q: 'motorcycle'}, function(err, res, data) {
  //if (err) { 
    //throw err;
  //}

  //console.log('what the fuck', res)
//})

//Be.userProjects(id, opts, function(err, res, data) {
  //console.log(err)
      //console.log(data);
//});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
