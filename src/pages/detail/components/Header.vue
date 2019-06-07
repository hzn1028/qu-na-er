<template>
  <div>
     <router-link tag="div" to="/" class="header-abs" v-show="showAbs"  :style="opacityAbsStyle"><div class="iconfont back-icon-back">&#xe624;</div></router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityFixedStyle">
     <router-link to="/">
       <div class="iconfont header-fixed-back">&#xe624;</div>
     </router-link>
     景点详情
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityAbsStyle: { // 返回键的渐变
        opacity: 1
      },
      opacityFixedStyle: { // 固定标题栏的渐变
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 特别注意，scrollTop中的每一对()都是来自网络的一种取法。已兼容安卓浏览器和UA为苹果的浏览器
      const scrollTop = (window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop) || (document.body.scrollTop + document.documentElement.scrollTop) || (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)

      if (scrollTop > 40) { // 固定标题栏的渐变
        let opacity = scrollTop / 130
        opacity = opacity > 1 ? 1 : opacity
        this.opacityFixedStyle = {
          opacity
        }
        this.showAbs = false
      } else { // 返回键的渐变
        this.showAbs = true
        let opacity = scrollTop / 40
        opacity = opacity > 1 ? 1 : opacity
        this.opacityAbsStyle = {
          opacity: (1 - opacity)
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created () {
    // 特别注意 如果在App.vue 中使用了keep-alive exclude="Detail"
    // 那么久不会执行activated(),但是会有created()
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header-abs
    position: absolute
    margin-left: .2rem
    top: .2rem
    text-align: center
    width: .6rem
    height: .6rem
    line-height: 0.6rem
    border-radius: .3rem
    background: rgba(0, 0, 0, .5)
    .back-icon-back
      color: #fff
      font-size: .3rem
      margin-left: -0.06rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    width: 100%
    max-width: 13rem
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .4rem
    .header-fixed-back
      position: absolute
      top: 0
      left: .0.5rem
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
