<template>
  <div id="app">
   
    <Home msg="Welcome to Your Vue.js App"/>
    
    <FoodItem 
      picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
      dishName= "Test Dish"
      desc=  "It's the best test dish you've ever had. There's nothing like it."
      :meats="['shrimp', 'beef', 'tofu']"
      :prices="[19.99, 25.55, 34.55]"
    />
     <FoodItem 
      picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
      dishName= "Test Dish2"
      desc=  "It's the best test dish you've ever had. There's nothing like it."
      :prices="[19.99]"
    />
    woah waoh
    <Footer/>
 
    {{currentRoute}} bayb
    
  </div>
</template>

<script>
import Home from './components/Home.vue'

import Footer from './components/Footer.vue'

import FoodItem from './components/food/FoodItem.vue'

const NotFound = { template: '<p>Page not found</p>' }
const About = { template: '<p>about page</p>' }
const Menu = { template: '<p>menu page</p>' }

const routes = {
  '/': Home,
  '/about': About,
  '/menu': Menu
}

export default {
  name: 'App',
  components: {
    Home,
    Footer,
  
    FoodItem,
  },
  data(){
    return{
      currentRoute: window.location.pathname
    }
  },
  computed: {
    ViewComponent(){
      return routes[this.currentRoute] || NotFound
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body{
  margin: 0;
  padding:0;
}
</style>
