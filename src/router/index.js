import Vue from 'vue'
import Router from 'vue-router'
// import JQuery from 'jquery'
import HelloWorld from '@/components/HelloWorld'
// require('../node_modules/caph-jquery.min.js')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
