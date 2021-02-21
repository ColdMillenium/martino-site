<template>
  <div id="app">
    <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
    <PizzaWingCombo size="small" lbs="1" price="19.65"/>
    <PizzaWingCombo size="medium" lbs="1" price="23.25"/>
    <PizzaWingCombo size="large" lbs="1 (1/2)" price="29.95"/>
    <PizzaWingCombo size="x-large" lbs="2" price="38.49"/>
    <PizzaWingCombo size="family" lbs="2 (1/2)" price="41.79"/>
    <PizzaWingCombo size="party" lbs="3" price="54.05"/>
    <FoodItem 
      picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
      dishName= "Test Dish"
      desc=  "It's the best test dish you've ever had. There's nothing like it."
      :meats="['shrimp', 'beef', 'tofu']"
      :prices="[19.99, 25.55, 34.55]"
    />
    woah waoh
    <Footer/>
    
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PizzaWingCombo from './components/food/PizzaWingCombo.vue'
import FoodItem from './components/food/FoodItem.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer,
    PizzaWingCombo,
    FoodItem,
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
  margin-top: 60px;
}
</style>
