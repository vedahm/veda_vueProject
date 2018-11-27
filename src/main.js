// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import Vueaxios from 'vue-axios'
import router from './router'
import { store } from './store/store'
import '../node_modules/bulma/css/bulma.css'


Vue.config.productionTip = false

Vue.use(Vueaxios,Axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
