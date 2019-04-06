<template>
  <div id="mypage">

    <Information/>
    <router-view></router-view>
  </div>
</template>

<script>
import Information from './components/Information.vue'

export default {
  name: 'mypage',
  data () {
    return {

      }
    },
    components: { Information }
}



</script>

<style>
＃mypage {
  background-color: black;
  

}

.view{
  float: left;
  position: relative;
  /*-webkit-box-shadow:4px 4px 3px rgba(20%,20%,40%,0.5);
  box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
  margin-right: 50px;*/
  top: 100px;
}

</style>
