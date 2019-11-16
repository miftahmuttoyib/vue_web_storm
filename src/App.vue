<template>
    <div id="app" class="dashboard-main-wrapper">
        <navigation-bar></navigation-bar>
        <side-bar></side-bar>
        <router-view></router-view>
<!--      <img alt="Vue logo" src="./assets/logo.png">-->
<!--      <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "@/components/main/NavigationBar";
import SideBar from "@/components/main/SideBar";

export default {
    name: 'app',
    components: {
        SideBar,
        NavigationBar
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
