<template>
  <div class="w" >
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import { mapState } from 'vuex'

axios.defaults.baseURL = process.env.API_ROOT
// 具体配置见 《npm-资源路径-本地调试-线上环境的api配置-环境隔离-打包》
// axios是api请求库

// 局部组件引入后还需要在components中声明
// 对象中的key-value相同时可以简写
// 模板中可以转小写并使用-连接
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
      // list: [{
      //   title: '成人票',
      //   children: [{
      //     title: '成人三管联票',
      //     children: [{
      //       title: '成人三管联票 - 某一连锁店销售'
      //     }]
      //   }, {
      //     title: '成人五管联票'
      //   }]
      // }, {
      //   title: '学生票'
      // }, {
      //   title: '儿童票'
      // }, {
      //   title: '特惠票'
      // }]
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)  //获取路由参数并传参给接口
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDetailSucc)
    },
    handleGetDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  *
    font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
  .w{
    max-width: 13rem;/*移动端650px,并且最好使用max-width*/
    margin: 0 auto;
  }
  .content{
    height: 50rem
  }
</style>
