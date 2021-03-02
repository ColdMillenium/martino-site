import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'





Vue.config.productionTip = false

Vue.use(VueRouter)



const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Menu', component: Menu },
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
