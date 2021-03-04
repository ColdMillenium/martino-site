<template>
  <div class="container">
 
    <section class="welcome">
       
      <h1 class= "welcome-title1">Pizza & Asian </h1>
      <h2 class="welcome-title2">Fusion Kitchen</h2>
      <Button class="welcome-btn" href="#order-now">Order Now!</Button>
      
    </section>
    
    <section class="about-us">
   
      <div class=" section-container">
        <div class="section-title">Our Story</div>
        <div class="story-content">
           <div>
            <p class="story">For the past 17 years, <em>Martino</em> has been working hard to serve the community while maintaining quality and service. We started out as a simple pizza store in 2003, establishing our reputation as the community’s “go to” pizza place. Since then we have expanded our menu and concept to combine Italian and Asian foods together, conveniently served in one location. 
            
            </p>
            <p class="story">This unique blend of culture is just what Toronto needs as a culturally diverse city. We have built relationships with the community over the course of years, and that relationship is still strong as ever! As time goes by, the community changes and so do people, but Martino will continue to deliver the quality food that people love from us. Our words are only as good as our actions, and we will continue to uphold our values to better serve the community.</p>
            </div>
            <img class="store-pic" src="../assets/img/store.jpg" alt="">
        </div>
        
   
      </div>
     
    </section>
    <section class="classic-combo">
      <div class="section-container">
      <div class="section-title">Classic Combo</div>
      <div class="classic-combo-pics">
        <div class="classic-left">
          <img class="classic-pizza" src="../assets/img/specialPizza/Mediterranean.jpg" alt="">
          <p class="classic-combo-desc">
            1 Pizza w/ 3 Toppings 
          </p>

        </div>
        <div class="classic-plus">
          <i class="fas fa-plus"></i>
        </div>
        <div class="classic-right">
          <div >
            <img class="classic-pasta" src="../assets/img/pasta.png" alt="">
            <img class="classic-asian" src="../assets/img/stirfry.png" alt="">
          </div>
          
          <p class="classic-combo-desc"> your choice of </p>
          <p class="classic-combo-desc">Pasta or Asian Dish</p>
        </div>
      </div>
      
      <div class="classic-combo-prices">
        <div class="classic-combo-price">
          <div class="classic-size">Small</div>
          <div class="classic-price">$23.45</div>
        </div>
        <div class="classic-combo-price">
          <div class="classic-size">Medium</div>
          <div class="classic-price">$26.99</div>
        </div>
        <div class="classic-combo-price">
          <div class="classic-size">Large</div>
          <div class="classic-price">$29.35</div>
        </div>
        <div class="classic-combo-price">
          <div class="classic-size">X-Large</div>
          <div class="classic-price">$33.34</div>
        </div>
        <div class="classic-combo-price">
          <div class="classic-size">Family</div>
          <div class="classic-price">$36.75</div>
        </div>
      </div>
     
      </div>
    </section>
    <section class="pizza-wing-combos">
      <div class="section-container">
        <div class="section-title">Pizza & Wings Combos</div>
        <!-- <div class="pizza-wing-combo-list">
          <PizzaWingCombo size="Small" lbs="1" price="19.65"/>
          <PizzaWingCombo size="Medium" lbs="1" price="23.25"/>
          <PizzaWingCombo size="Large" lbs="1 (1/2)" price="29.95"/>
          <PizzaWingCombo size="X-Large" lbs="2" price="38.49"/>
          <PizzaWingCombo size="Family" lbs="2 (1/2)" price="41.79"/>
          <PizzaWingCombo size="Party" lbs="3" price="54.05"/>
        </div> -->
        <PizzaWingCombo2/>
      </div>
    </section>

    <section class="menu-highlights">
      
    </section>

    <section id="order-now" class="order-now">
      <div class="section-container">
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
      </div>
 
      
    </section>
  </div>
</template>

<script>

import Button from './util/Button.vue'
// import PizzaWingCombo from './food/PizzaWingCombo.vue'
import PizzaWingCombo2 from './food/PizzaWingCombo2.vue'



export default {
  name: 'Home',
  components:{
    Button,
    // PizzaWingCombo,
    PizzaWingCombo2,
 
    
  },
  props: {
    msg: String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  margin-bottom: 100px;
}
.section-title{
 
  font-size: 60px;
  font-weight: 600;
  
  margin-bottom: 40px;
}
.welcome-title1,
.welcome-title2,
.section-title{
  text-shadow: 0px 4px 3px rgba(75, 75, 75, 0.4),
               0px 8px 13px rgba(97, 97, 97, 0.1),
               0px 18px 23px rgba(143, 143, 143, 0.1);
}
/* ------------- WELCOME -------------*/
.section-container{
  margin: auto;
  max-width: 1000px;
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
  
  color: white;
  
}

.welcome-btn{
  margin: 20px;
  font-size: 24px;
  font-weight: 600;

}
/* ------------- About us -------------*/
.about-us{
 display:flex;
 justify-content:center;
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
  text-align: left;
}
.story-content{
  display: flex;
  gap: 50px;
}
/* img{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
} */
.about-us-content{
  
  width: 1200px;
  text-align: left;
}
/* ------------- Classic Combo -------------*/
section{
  margin-bottom: 100px;
}
.classic-combo .section-container{
   background: rgb(255, 255, 255);
   border-radius: 3px;
   padding: 20px;
   /* background: url(./../assets/img/vintage3.jpg); */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.classic-combo-pics,
.classic-left,
.classic-right,
.classic-plus{
  display:flex;
  justify-content:center;
  align-items: center;
   flex-direction: row;
  gap: 10px;
}

.classic-combo-pics{
 
  width: 100%;
  justify-content: space-evenly;
}

.classic-left{
  flex-direction: column;
}
.classic-pizza,
.classic-pasta,
.classic-asian{
  height: 150px;
  width: 150px;
  border-radius: 100%;
  /* border: 4px solid var(--highlight); */
  filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.178));
}

.classic-plus{
  font-size: 50px;
  color:  var(--black);

}
.classic-right{
  position: relative;

  padding: 1em 0;
  flex-direction: column;
  width: 300px;
  gap: 10px
}


.classic-pasta-or-asian{
  display: flex;
  height: 100px;
}
.classic-or{
  font-size: 30px;
  font-weight: 600;
}
.classic-combo-desc{
  font-weight: 600;
  font-size: 24px;
  margin:0;
 
}
.classic-combo-prices,
.classic-combo-price{
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-evenly
}
.classic-combo-price{
  flex-direction: column;
  border: 3px solid var(--highlight);
  padding: 0.5em 1.5em;
  border-radius: 5px
}
.classic-price{
  font-weight: 600;
  font-size: 20px
}
.classic-size{

  
}




/* ------------- PIZZA & WING COMBOS -------------*/
.pizza-wing-combos{
 padding: 20px;
 /* background: url(../assets/img/woodTable.jpg); */
 /* background: var(--black); */
 color: var(--black);
 background-size: cover;
}
.pizza-wing-combos
.section-title{
   color: var(--black);
}
.pizza-wing-combo-list{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  
}

/* ------------- ORDER NOW -------------*/
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
  width: 50%;
  background: url(../assets/img/map.png);
}
.order-content-right img{
  width: 100%;
}


</style>
