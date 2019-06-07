<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- weekendList 改成 list 通过属性传进来-->
      <li  @click="goDetail()" class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      // weekendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
      //     title: '秦淮金粉里的南京',
      //     desc: '六朝金粉，处处诉说着南京的历史'
      //   }, {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
      //     title: '南京必游TOP10',
      //     desc: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
      //   }, {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
      //     title: '民国情怀国共风华',
      //     desc: '找到你心中想要的那个民国时期的南京'
      //   }, {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ed/8bce72632c9136.jpg_r_640x214_221c04c6.jpg',
      //     title: '孩子的游玩地',
      //     desc: '让小朋友们欢脱起来'
      //   }
      // ]
    }
  },
  methods: {
    goDetail () {
      this.$router.push('/detail/000X')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    text-align: left
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .28rem
      color: #212121
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #616161
      font-size: .24rem
      width: 100%
      ellipsis()
</style>
