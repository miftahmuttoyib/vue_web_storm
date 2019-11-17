<template>
    <div id="app" class="dashboard-main-wrapper">

        <navigation-bar></navigation-bar>
        <side-bar></side-bar>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
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
