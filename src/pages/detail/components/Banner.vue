<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>
         &nbsp;{{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- 这里会填充到插槽 -->
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @Gallary-Close="handleGlallayColse"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
      /* imgs: ['//img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_600x330_d7e04f5c.jpg', '//img1.qunarzz.com/sight/p0/1507/c5/c5bf379142fcd62c.img.jpg_r_800x800_1767618a.jpg', 'http://img1.qunarzz.com/sight/p0/1507/11/111287098a524223.img.jpg_r_800x800_c9e05004.jpg'] */
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGlallayColse () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        text-align: start
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: 0.2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
