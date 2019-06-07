<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="isShowGallary">
      <!-- slides -->
      <!-- swiplerList 改成 list 通过属性传进来-->
      <swiper-slide v-for="(item,index) in imgs" :key='index' >
        <img class="gallary-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 显示 2/3页码
        observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启，可以使用update()方法更新。
        loop: true, // 以下4个处理自动滚动
        autoplay: 1800,
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false // 解决swiper手动改滑动之后，不再自动滑动了
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('Gallary-Close') // 单引号
    }
  },
  computed: {
    isShowGallary () {
      return this.imgs.length > 0
    }
  }
}
</script>

<style lang='stylus' scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
        margin-top: 1rem;
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
