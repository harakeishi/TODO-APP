<template>
  <div id="app">
    <appheader class="appheader"></appheader>
    <div class="blank">

    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/info">Info</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import appheader from './components/header.vue'
export default {
  name: 'App',
  components: {
    appheader: appheader
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appheader{
  top: 0;
  left: 0;
  position: fixed;
}
.blank{
  height: 70px;
}
</style>
