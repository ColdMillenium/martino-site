<template>
  <div class="container">
    
    <section class="welcome">
       
      <h1 class= "welcome-title1">Pizza & Asian </h1>
      <h2 class="welcome-title2">Fusion Kitchen</h2>
      <Button class="welcome-btn">Order Now!</Button>
      
    </section>
    <Header/>
    <section class="about-us">
      <div class="about-us-content">
        <div class="section-title">Our Story</div>
        <div class="story-content">
            <div class="story">For the past 17 years, <em>Martino</em> has been working hard to serve the community while maintaining quality and service. We started out as a simple pizza store in 2003, establishing our reputation as the community’s “go to” pizza place. Since then we have expanded our menu and concept to combine Italian and Asian foods together, conveniently served in one location. This unique blend of culture is just what Toronto needs as a culturally diverse city. We have built relationships with the community over the course of years, and that relationship is still strong as ever! As time goes by, the community changes and so do people, but Martino will continue to deliver the quality food that people love from us. Our words are only as good as our actions, and we will continue to uphold our values to better serve the community.</div>
            <img class="store-pic" src="../assets/img/store.jpg" alt="">
        </div>
        
      </div>
     
    </section>
    <section class="classic-combo"></section>
    <section class="pizza-wing-combos">
        <div class="section-title">Pizza & Wings Combos</div>
        <div class="pizza-wing-combo-list">
          <PizzaWingCombo size="Small" lbs="1" price="19.65"/>
          <PizzaWingCombo size="Medium" lbs="1" price="23.25"/>
          <PizzaWingCombo size="Large" lbs="1 (1/2)" price="29.95"/>
          <PizzaWingCombo size="X-Large" lbs="2" price="38.49"/>
          <PizzaWingCombo size="Family" lbs="2 (1/2)" price="41.79"/>
          <PizzaWingCombo size="Party" lbs="3" price="54.05"/>
        </div>
    </section>
    <section class="menu-highlights">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section class="order-now">
      <div class="section-title">Order Now</div>
      <div class="order-info">Last call for Asian and Pasta dishes is <strong>8PM</strong>. We will continue to make Pizza and Wings until 9PM.</div>
      <div class="order-content">
        <div class="order-content-left">
          <p>pickup: 416-929-6000</p>
          <p>Delivery</p>
          <p>Open from</p>
          <p>location</p>
        </div>
        <div class="order-content-right">
          <img src='../assets/img/map.png' alt="">
        </div>
      </div>
 
      
    </section>
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
section{
  margin-bottom: 30px;
}
.section-title{
 
  font-size: 60px;
  font-weight: 600;
  filter: drop-shadow(0px 19px 20px rgba(0, 0, 0, 0.25));
}
.welcome{
  width:100%;
  height: 100vh;
  background: url(../assets/img/specialPizza/GeneralTaoPizza.jpg);
  background-size:cover;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 19px 20px rgba(0, 0, 0, 0.25));
}
.welcome-title1{
  font-size: 96px;
  font-weight: 400;
}
.welcome-title2{
  font-size: 72px;
  font-weight: 400;
}
.welcome-title1,
.welcome-title2,
.welcome-btn{
  filter: drop-shadow(0px 19px 20px rgba(0, 0, 0, 0.25));
  color: white;
}

.welcome-btn{
  margin: 20px;
  font-size: 24px;
  font-weight: 200;
}
.about-us{
 display:flex;
 justify-content:center;
}
.about-us-content{
  
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
  
}
.order-info{
  width: 500px;
  padding: 10px;
  text-align: center;
  margin: auto;
  margin-bottom: 30px;
}
.order-content{
  display: flex;
}
.order-content-left{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 50%;
  text-align: left;
  padding: 50px;
}
.order-content-left p{
  font-size: 24px;
}
.order-content-right{
  width: 50vh;
  background: url(../assets/img/map.png);
}
.store-pic{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  height: 400px;
}
.story{
  width: 75%;
  display: inline;
  line-height: 3;
  text-align: left;;
}
.story-content{
  display: flex;
  gap: 50px;
}

</style>
