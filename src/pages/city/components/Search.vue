<template>
  <div>
    <div class="search">
     <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom " v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom " v-show="hasNoData">没有匹配到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('toChangeCity', city)
      this.keyword = '' // 这里需要置空，为了关闭搜索列表
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    const options = {
      // 处理在better-scroll在安卓手机上不能点击的问题
      // 更多配置见
      // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#click
      click: true,
      tap: true
    }
    this.scroll = new Bscroll(this.$refs.search, options)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    height: 0.72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      box-sizing: content-box
      width: 100%
      padding: 0 .1rem
      line-height: 0.62rem
      text-align: center
      border-radius: 0.06rem
      color: #666
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
      text-align: left
</style>
