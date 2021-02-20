<template>
  <div id="app">
    <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
    <PizzaWingCombo size="small" lbs="1" price="19.65"/>
    <PizzaWingCombo size="medium" lbs="1" price="23.25"/>
    <PizzaWingCombo size="large" lbs="1" price="29.95"/>
    <PizzaWingCombo size="x-large" lbs="1" price="38.49"/>
    <PizzaWingCombo size="family" lbs="1" price="41.79"/>
    <PizzaWingCombo size="party" lbs="1" price="54.05"/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PizzaWingCombo from './components/food/PizzaWingCombo.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer,
    PizzaWingCombo
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
