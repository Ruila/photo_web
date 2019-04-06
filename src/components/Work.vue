<template>
  <div id="work">
    <img src="src/assets/1.jpg" title="films" />
    <img src="src/assets/2.jpg" title="films" />
    <img src="src/assets/3.jpg" title="films" />
    <img src="src/assets/4.jpg" title="films" />
    <img src="src/assets/5.jpg" title="films" />
    <img src="src/assets/6.jpg" title="films" />
    <img src="src/assets/7.jpg" title="films" />
    <img src="src/assets/8.jpg" title="films" />
    <img src="src/assets/9.jpg" title="films" />
    <img src="src/assets/10.jpg" title="films" />
    <img src="src/assets/11.jpg" title="films" />
    <img src="src/assets/12.jpg" title="films" />
    <img src="src/assets/13.jpg" title="films" />
    <img src="src/assets/14.jpg" title="films" />
    <img src="src/assets/15.jpg" title="films" />
    <img src="src/assets/16.jpg" title="films" />
    <pagination></pagination>
  </div>
</template>

<script>
import pagination from './pagination.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    pagination,
  }
}

</script>

<style>

img[title="films"] {
  position: relative;
  width: 100%;
  height: 100%;

  top: 150px;
  margin: 1px;
}

#work {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top:-80px;
}

</style>
