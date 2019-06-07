import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

/**
 * 路由控制中心
 */
export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }], // 打开新页面显示到顶部，不能受到上一页上下滚动的距离影响
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
