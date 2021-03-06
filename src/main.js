// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('../node_modules/caph-jquery.min.js')

Vue.config.productionTip = false
Vue.directive('focused', {
  inserted: function (el) {
  	$.caph.focus.$$toAvailable($(el))
    console.log(el)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
