<template>
  <div class="w">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @changeLetter="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT
// 具体配置见 《npm-资源路径-本地调试-线上环境的api配置-环境隔离-打包》
// axios是api请求库

// 局部组件引入后还需要在components中声明
// 对象中的key-value相同时可以简写
// 模板中可以转小写并使用-连接
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''

    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
  *{
     font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
  }
  .w{
    max-width: 13rem;/*移动端650px,并且最好使用max-width*/
    margin: 0 auto;
  }
</style>
