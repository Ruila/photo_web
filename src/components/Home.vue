<template>
  <div id="home">
  <transition
    appear-active-class="fade-enter-active"
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear" name="fade">
    <div v-show="show"> <!--show has bug-->
    <img src="src/assets/index.jpg" title="background" />
    </div>
  </transition>
  </div>
</template>

<script>

export default {
  name: 'mypage',
  data() {
    return{

    }
  },
  methods: {
    beforeAppear: function() {
      console.log('beforeAppear')
    },
    appear: function() {
      console.log('appear!')
    },
    afterAppear: function() {
      console.log('afterAppear!')
    },
    show: true ,

  }
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


img[title="background"] {
  position: fixed;

  width: 1468.8px;
  height: 979.2px;
  float: left;
  left: -8px;
  top: 55px;

}

</style>
