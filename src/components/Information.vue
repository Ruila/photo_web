<template>
  <div id="information">
    <div id="naa">
      <a><router-link to="/" >MENGRULIN</router-link></a>
    </div>
    <ul>
      <li>
        <a><router-link to="/profile">PROFILE</router-link></a>
      </li>
      <li>
        <a><router-link to="/work">PHOTOGRAPHY</router-link></a>
      </li>
      <li>
        <a>FILMS</a>
      </li>
      <li>
        <a href="https://www.instagram.com/ruifilm/">INSTAGRAM</a>
      </li>
    </ul>
    <!--router-view name="nav_sec"></router-view-->

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#information {
  width: 100%;
  height: 65px;
  text-align: center;
  float: left;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

#naa {
  position: relative;
  width: 25.33%;
  height: 65px;
  line-height: 65px;
  background-color: #f3f3f3;
  list-style-type:none;
}

#information a {
  text-decoration: none;
  font-size: 13px;
  color: #484848;
  font-family: Tahoma;
}

#information li {
  top: -81px;
  left: 50px;
  position: relative;
  list-style-type: none;
  color: #5d5d5d;
  display: inline-block;
  width: 150px;
  height: 65px;
  line-height: 65px;
  background-color: WHITE;

}
</style>
