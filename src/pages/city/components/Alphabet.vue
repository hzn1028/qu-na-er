<template>
  <ul class="list">
     <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('changeLetter', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      e.preventDefault() // 微信中处理 向上滑动时整个页面跟随滚动的问题 似乎这个是关键的一句话
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 节流优化
        // console.log(startY)
        // 79好像就是A的距上的距离
          const touchY = e.touches[0].clientY - 79 // 好像必须写这个
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('changeLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
