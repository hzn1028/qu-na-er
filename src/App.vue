<template>
  <div id="app">
    <!-- exclude会导致页面中不再回调activated (), 但是会调用created (),所以一些需要重新初始化的方法或者属性需要在created () 调用。例如：src/pages/detail/components/Header.vue -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
