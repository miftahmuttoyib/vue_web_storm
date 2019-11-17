import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

Vue.config.productionTip = false;

Vue.component('login', Login);
Vue.component('dashboard', Dashboard);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
