<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
       <!-- recommendList 改成 list 通过属性传进来-->
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      // recommendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/201406/04/4f597aad25208a233999238c65af9b06.jpg_200x200_d1ea2bd2.jpg',
      //     title: '南京珍珠泉水上世界',
      //     desc: '高品质天然泉水水上乐园'
      //   }, {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/9b/9b3cbcf2624bf8cea3.img.jpg_200x200_075bc9ef.jpg',
      //     title: '弘阳未来世界主题乐园',
      //     desc: '带你快乐一夏天'
      //   }, {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/b3/1415e635014967c75a3d955ae256a628.water.jpg_200x200_54ee590f.jpg',
      //     title: '南京汤山一号温泉',
      //     desc: '南京本月收藏Top5╰(￣▽￣)╭'
      //   }, {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/58/589f52a494f307d3a3.water.jpg_200x200_71b77fd4.jpg',
      //     title: '巴布洛生态谷',
      //     desc: '健康生活之门为你打开'
      //   }, {
      //     id: '0005',
      //     imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/15/1530936526074f62.water.jpg_200x200_fb55ee43.jpg',
      //     title: '六朝博物馆',
      //     desc: '研究六朝历史文化的专题博物馆'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      text-align: left
      margin-top: .02rem
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        width: 100%
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
