// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/'
import 'swiper/dist/css/swiper.css'
// 部分浏览器300毫秒点击延迟
import fastclick from 'fastclick'
// 统一不同浏览器的默认样式 styles 这里在build/webpack.base.conf.js配置了别名
import 'styles/reset.css'
// 1像素边框解决方案
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 300毫秒点击延迟
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
