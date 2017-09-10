
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router'
import router     from './router'

window.Vue = require('vue');
Vue.use(require('vue-resource'));
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

// lazy load components
const Room = (resolve) => require(['./components/Room.vue'], resolve)

new Vue({
    
      router,
      components : {
        Room
      },
    
      data : {
    
      }
     
    }).$mount('#app')
/*
https://github.com/fagray/vuejs2-laravel53-starter/blob/master/package.json
*/