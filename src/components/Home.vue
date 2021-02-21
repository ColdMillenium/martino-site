<template>
  <div class="container">
    <Header/>
    <section class="welcome">
       
      <h1>Pizza & Asian </h1>
      <h2>Fusion Kitchen</h2>
      <Button>Order Now!</Button>
      
    </section>
    <section class="about-us">
      <div class="about-us-content">
        <h1>Our Story</h1>
        <p>For the past 17 years, Martino has been working hard to serve the community while maintaining quality and service. We started out as a simple pizza store in 2003, establishing our reputation as the community’s “go to” pizza place. Since then we have expanded our menu and concept to combine Italian and Asian foods together, conveniently served in one location. This unique blend of culture is just what Toronto needs as a culturally diverse city. We have built relationships with the community over the course of years, and that relationship is still strong as ever! As time goes by, the community changes and so do people, but Martino will continue to deliver the quality food that people love from us. Our words are only as good as our actions, and we will continue to uphold our values to better serve the community.</p>
      </div>
     
    </section>
    <section class="classic-combo"></section>
    <section class="pizza-wing-combos">
        <h1>Pizza & Wings Combos</h1>
        <div class="pizza-wing-combo-list">
          <PizzaWingCombo size="small" lbs="1" price="19.65"/>
          <PizzaWingCombo size="medium" lbs="1" price="23.25"/>
          <PizzaWingCombo size="large" lbs="1 (1/2)" price="29.95"/>
          <PizzaWingCombo size="x-large" lbs="2" price="38.49"/>
          <PizzaWingCombo size="family" lbs="2 (1/2)" price="41.79"/>
          <PizzaWingCombo size="party" lbs="3" price="54.05"/>
        </div>
    </section>
    <section class="order-now"></section>
  </div>
</template>

<script>

import Button from './util/Button.vue'
import PizzaWingCombo from './food/PizzaWingCombo.vue'
import Header from './Header.vue'
export default {
  name: 'Home',
  components:{
    Button,
    PizzaWingCombo,
    Header
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  width:100%;
  height: 100vh;
  background: url(../assets/img/WelcomeBackground.png);
  background-size:cover;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-us{
 display:flex;
 justify-content:center;
}
.about-us-content{
  background-color:lightgrey;
  width: 1200px;
  text-align: center;
}
.pizza-wing-combos{
  margin:auto;
  width: fit-content;
  max-width: 1500px;
}
.pizza-wing-combo-list{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  background-color: lightgrey;
}
</style>
