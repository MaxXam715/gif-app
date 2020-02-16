import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css/animate.min.css';

import './assets/css/fonts.less'
import './assets/css/styles.less'
import './assets/css/media.less'

import './assets/css/transitions.less'


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//Плагины
window.$ = window.jQuery = require('jquery');

// fancybox
require('@fancyapps/fancybox/dist/jquery.fancybox.min.css');
require('@fancyapps/fancybox');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
