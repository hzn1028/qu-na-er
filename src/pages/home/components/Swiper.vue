<template>
  <div class="wrapper" @click="goDetail()">
   <swiper :options="swiperOption" v-if="isShowSwiper" >
    <!-- slides -->
    <!-- swiplerList 改成 list 通过属性传进来-->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
// autoplay: true,
// speed: 2500,
// spaceBetween: 5000
// 配置参考 https://blog.csdn.net/mrliber/article/details/78819191
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1800,
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false, // 解决swiper手动改滑动之后，不再自动滑动了
        observer: true,
        observeParents: true
      }
      // ,
      // swiplerList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
      //   }, {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg'
      //   }, {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/d5/fe8867e329175202.jpg_750x200_98799354.jpg'
      //   }, {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/29/6a13907ab0f9bf02.jpg_750x200_452cfebe.jpg'
      //   }
      // ]
    }
  },
  computed: { // 控制不要默认显示的最后一页
    isShowSwiper () {
      return this.list.length
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
  .wrapper >>> .swiper-pagination-bullet-active
     background: #fff !important
  @import '~styles/varibles.styl'
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom: 25%
    .swiper-img
      width: 100%
</style>
