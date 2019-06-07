<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
      <!-- <input class="header-input-input" type="text" placeholder="输入城市/景点/游玩主题"></input> -->
     </div>
    <router-link to="/city">
      <div class="header-right">
      <!-- {{this.city}} -->
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: 0.12rem
      margin-left: .08rem
      padding-left: 0.2rem
      line-height: 0.64rem
      height: 0.64rem
      background: #fff
      border-radius: .1rem
      text-align: start
      color: #ccc
      .header-input-input
        padding-left: .08rem
        color: grey
        margin-top: -0.06rem
        font-size: .27rem
        font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
