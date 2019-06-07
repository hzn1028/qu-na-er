<template>
  <transition>
    <!-- 插槽 调用方的包裹的子组件会填充到这里 -->
    <slot></slot>
  </transition>
</template>

<script>

export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
