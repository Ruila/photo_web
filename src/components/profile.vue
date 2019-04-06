<template>
  <div id="profile" >
    <img src="src/assets/me.jpg" style="position:relative; top:150px; left:50px;
      width:450px; height: 450px;" />
    <div class="introduction">
    <p>臺南人</p>
    <p></p>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style lang="less">

#profile {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.introduction {
  position:relative;
  margin-left: 700px;
  top:-300px;
}

</style>
