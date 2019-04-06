<template>
  <div id="profile" >

  <pagination></pagination>
  </div>
</template>

<script>
import pagination from './pagination.vue'

export default {
  components: {
    pagination,
  }
}
</script>

<style lang="less">

#profile {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 50px;
}

</style>
