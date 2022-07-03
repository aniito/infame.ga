<template>
<div class="container">
  <SideBar></SideBar>
   <div class="wrapper">
      
      <router-view/>

   </div>
</div>
</template>

<script>
import SideBar from "./components/sidebar.vue";
import "./assets/css/style.css";
import "./assets/css/sidebar.css"
export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  background-color: #111;
  color:aliceblue

}
</style>

