<template>
  <div id="work">

  <div class="thumb_div"
      v-bind:class="{ 'hidden_class': isA }">
    <div class="thumbnails" v-on:click="Show_home"
      v-bind:class="{'hidden_class': isA }">
      <img src="src/thumbnails/home.jpg" title="thumbnails" />
      <p>HOME</p>
    </div>

    <div class="thumbnails" v-on:click="Show_dive"
      v-bind:class="{'hidden_class': isA }">
      <img src="src/thumbnails/dive.jpg" title="thumbnails" />
      <p>DIVE</p>
    </div>

    <div class="thumbnails"
      v-bind:class="{'hidden_class': isA }">
      <img src="src/thumbnails/me.jpg" title="thumbnails" />
      <p>PORTRAIT</p>
    </div>

  </div>

    <div v-bind:class="{'hidden_class': isHome }">
      <img src="src/assets/2.jpg" title="films" />
      <img src="src/assets/4.jpg" title="films" />
      <img src="src/assets/6.jpg" title="films" />
      <img src="src/assets/7.jpg" title="films" />
      <img src="src/assets/11.jpg" title="films" />
    </div>
    <div v-bind:class="{'hidden_class': isDive }">
      <img src="src/assets/1.jpg" title="films" />
      <img src="src/assets/3.jpg" title="films" />
      <img src="src/assets/5.jpg" title="films" />
      <img src="src/assets/8.jpg" title="films" />
      <img src="src/assets/9.jpg" title="films" />
      <img src="src/assets/10.jpg" title="films" />
      <img src="src/assets/12.jpg" title="films" />
      <img src="src/assets/13.jpg" title="films" />
      <img src="src/assets/14.jpg" title="films" />
      <img src="src/assets/15.jpg" title="films" />
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    isA: false,
    isHome: true,
    isDive: true
  }),
  components: {

  },
  methods:{
  Show_home: function (){
    alert("This is my home !");
    this.isA=!this.isA;
    this.isHome=!this.isHome;
      },
  Show_dive: function (){
    this.isA=!this.isA;
    this.isDive=!this.isDive;
      },
}
}
</script>

<style>
#work {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

img[title="films"] {
  position: relative;
  width: 100%;
  height: 100%;
  top: 70px;
  margin: 1px;
}

img[title="thumbnails"] {
  position: relative;
  width: 300px;
  height: 300px;
}

.thumb_div{
  display: flex;
  flex-direction: row;
  margin:250px 150px 0px 150px; /*top right bottom left*/
}

    .thumbnails{
      cursor: pointer;
      margin: 30px 35px;
      text-align: center;
      opacity: 0.85;
    }

      .thumbnails p{
        position: relative;
        top: -230px;
        font-size: 45px;
        font-weight: 400;
        color:white;
        font-family: Tahoma;
      }

.hidden_class{
    display: none;
}

</style>
