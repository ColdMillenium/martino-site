<template>
  <div class="home-container">
 
    <section class="welcome">
      <div class= "welcome-title1">Pizza & Asian </div>
      <div class="welcome-title2">Fusion Kitchen</div>
      <Button class="welcome-btn" href="#order-now">Order Now!</Button>
    </section>

    <section class="specials">
      <div class="section-container">
      <div class="section-title"> Chef's Specials</div>
      <div class="specials-list">
        <div class="special-item">
        
          <img src="../assets/img/chicken/cashewNutChicken.jpg" alt="">
          <i class="fas fa-thumbs-up"></i>
          <div class="price">$12.85</div>
          <div class="text-area">
            <h2 class="subtitle">Cashew Nut Chicken</h2>
            <p class="desc">Chicken with roasted cashew nuts, sweet peppers and onions.</p>
          </div>
          
        </div>
        <div class="special-item">
          
          <img src="../assets/img/specialPizza/Mediterranean.jpg" alt="">
          <i class="fas fa-thumbs-up"></i>
          <div class="price medium">$22.25</div>
          <div class="text-area">
            <h2 class="subtitle">Mediterranean Pizza </h2>
            <p class="desc">Spinach, Feta, Tomatoes, Onions, Black Olives, Parmesan.</p>
          </div>
          
        </div>
        <div class="special-item">
          
          <img src="../assets/img/Noodle/shanghaiNoodle.jpg" alt="">
          <i class="fas fa-thumbs-up"></i>
          <div class="price">$11.95</div>
          <div class="text-area">
             <h2 class="subtitle">Beef Shanghai Noodles</h2>
            <p class="desc">Thick wheat noodles stir-fried in hoisin sauce with beef and cabbage.</p>
          </div>
         
        </div>
        </div>
      </div>
     
    </section>

    
    <section class="classic-combo">
      <div class="section-container">
      <div class="section-title">Classic Combo</div>
      
      <div class="classic-combo-desc">
        <img class="pasta-asian-img" src="../assets/img/PastaOrAsian.png" alt="Pasta and asian food">
       <div class="desc1 "> <span>1 Pizza</span> with <span>3 toppings</span></div>
       <div class="desc2">plus your choice of</div>
       <div class="desc3"><span>Pasta</span> or <span>Asian</span> Dish</div>
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
      <div class="order-content">
        
        <div class="order-content-left">
          
          <div class="order-info">Last call for Asian and Pasta dishes is <strong>8PM</strong>. We will continue to make Pizza and Wings until 9PM.</div>
          <div class="order-grid">
              <div class="days-open order-now-section">
              <div class="title">Hours <i class="fas fa-clock  order-now-icon"></i></div>
              <div class="desc"> 
                Monday - Saturday: <br/><strong>11AM - 9PM</strong>
              </div>
            </div>
            <div class="address order-now-section ">
            <div class="title">Address <i class="fas fa-map-marker  order-now-icon"></i></div>
              <a href="https://goo.gl/maps/bbq3uiTSrafS16Mw5" class="link">178 Dupont Street, Toronto</a>
            </div>
            <div class="pickup order-now-section">
              <div class="title">Pickup <i class="fas fa-phone  order-now-icon"></i></div>
              <div class="desc">416-929-6000</div>
            </div>
            <div class="delivery order-now-section">
              <div class="title">Delivery <i class="fas fa-car  order-now-icon"></i></div>
              
              Click here to order Delivery!
              <a href="https://www.ubereats.com/toronto/food-delivery/martino-pizza-%2526-asian-fusion-kitchen/daMPWIR7QbaQLUImKv9LIw">
                <img class="uber-eats-logo" src="../assets/img/uberEatsLogo.png" alt="">
                
              </a>
              
              
              <!-- <div class="desc"><strong>11:30am - 8:00pm</strong></div> -->
            </div>
          </div>
          
       
          
        </div>
        
         <iframe class="order-content-right"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.6762993874686!2d-79.40589978450153!3d43.675701579120485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349f44e6b9c1%3A0xa0307fbb8b437010!2sMartino%20Pizza%20%26%20Asian%20Fusion%20Kitchen!5e0!3m2!1sen!2sus!4v1614991244394!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
       
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
  position: relative;
  font-size: 60px;
  font-weight: 600;
  width: fit-content;
  margin: 3rem auto;
 
}
/* .section-title::before{
  position: absolute;
  content: "";
  height: 10px;
  width: 80%;
  left: 0;
  bottom: -2px;
  background: var(--highlight);
  z-index: -1;
} */

.welcome-title1,
.welcome-title2
{
  text-shadow: 0px 4px 3px rgba(75, 75, 75, 0.4),
               0px 8px 13px rgba(97, 97, 97, 0.1),
               0px 18px 23px rgba(143, 143, 143, 0.1);
}
/* ------------- WELCOME -------------*/
.section-container{
  margin: auto;
  max-width: 1098px;
}
.welcome{
  width:100%;
  height: 40vh;
  background: url(../assets/img/GeneralTaoPizzaBanner.png);
  background-size:cover;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0;
  min-height: 450px;
 
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
  margin: 2.0rem;
  font-size: 2.4rem;
  font-weight: 600;
  border-radius: 0.3rem;

}
/* ------------- Specials -------------*/
  .specials-list{
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  
  }
  .special-item{
    position: relative;
    width: 30rem;
    height: contain-content;
    background: white;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 5px;
    
    height: 350px;
  }

  
  .special-item .price{
    position: absolute;
    bottom: 12.0rem;
    padding: 1.5rem;
    right: 0;
    font-size: 4.8rem;
    color: white;
    font-weight: 600;
    filter: drop-shadow(4px 2px 3px rgba(0, 0, 0, 0.7));
  }
  .special-item .price.medium::before{
    content: "Medium size for";
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: right;
    position: absolute;
    top: 1rem;
    right: 0;
    padding-right: 1.5rem;
  }
  
  .special-item img{
    display:hidden;
  
    height: 80%;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in;

  }
 
  .special-item .text-area{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    background: white;
    padding: 1.0rem;
    margin: 0;
  }
  .special-item .text-area h2{
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
  .special-item .text-area .desc{
    color: green;
    margin: 1rem auto;
    width: 80%;
  }
  .fa-thumbs-up{
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    margin: 1.5rem;
    font-size: 20px;
    z-index: 500;
    background: var(--highlight);
    padding: 1.5rem;
    border-radius: 100%;
    filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.5));
    
  }


/* ------------- Classic Combo -------------*/

.classic-combo .section-container{
   background: url(./../assets/img/ClassicPizzaBackground.png);
   background-size: cover;
   border-radius: 0.3rem;
   color: white;
   /* background: url(./../assets/img/vintage3.jpg); */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
}
.classic-combo-pics,
.classic-left,
.classic-right,
.classic-plus{
  display:flex;
  justify-content:center;
  align-items: center;
   flex-direction: row;
  /* gap: 10px; */
}

.classic-combo-pics{
 
  width: 100%;
  justify-content: space-evenly;
}


.classic-pizza,
.classic-pasta,
.classic-asian{
  height: 15rem;
  width: 15rem;
  
  /* border: 4px solid var(--highlight); */
  /* filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.178)); */
}
.classic-pizza{
  height: 20rem;
  width: 30rem;
}

.classic-plus{
  font-size: 5rem;
  color:  var(--black);

}
.classic-right{
  position: relative;

  /* padding: 1em 0; */
  flex-direction: column;
  

}


.pasta-asian-img{
  width: 15rem;
}

.classic-combo-desc{
  font-weight: 600;
  font-size: 2.4rem;
  margin:0.5rem auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.637);
  border-radius: 0.3rem;
  width: fit-content;
  padding: 2rem;
  font-family: 'Roboto';
}
.classic-combo-desc div{
  margin: 2rem;
}


.desc1, .desc3{
  font-weight: 600;
  font-size: 2.4rem;
}
.desc2{
  font-weight: 300;
}
.desc3{
  font-size: 4rem;
}
span{
  color: var(--highlight);
 
}


.classic-combo-prices,
.classic-combo-price{
  margin: 3rem 0 0 0;
  display: flex;
  justify-content: space-evenly
}
.classic-combo-price{
  flex-direction: column;
  filter: drop-shadow(4px 2px 3px rgba(0, 0, 0, 0.7));
}
.classic-price{
  font-weight: 600;
  font-size: 3.6rem;
}
@media  screen and (max-width: 100rem) {
 .classic-combo-prices{
   justify-content: center;
 }
 .classic-combo-price{
   padding: 1rem;
 }
}
@media  screen and (max-width: 64rem) {
 .classic-combo-prices{
   flex-wrap: wrap;
 }
 .classic-combo-price{
   flex: 34%;
   margin: 0;
 }
}




/* ------------- PIZZA & WING COMBOS -------------*/
.pizza-wing-combos{
 padding: 2rem;
 color: var(--black);
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
.order-now{


}

.order-content{
  display: flex;
  justify-content: space-between;
  height: 50rem;
  padding: 0;
}
.order-content-left{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 50px; */
  
  width: 50%;
  text-align: left;
  gap: 2rem;
 
}
.order-content-left p{
  font-size: 2.4rem;
}
.order-content-left *{
  margin-left: 0;
  padding-left: 0;

}
.order-info{
  width: 50rem;

  text-align: left;
  margin-right: 3rem;
  width: 80%;
  padding: 2.0rem;
  border: 3px solid var(--highlight);
  border-radius: 0.3rem;
  margin-bottom: 2rem;

}
.order-content-left .section-title{
  margin-top: 0;
  padding-top: 0;
}
.order-content-right{
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
 
}

.order-now-section{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-now-section .title{
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.address .link{
  text-decoration: none;
  
}
.uber-eats-logo{
  height: 10rem;
  display: inline block ;
  border: 0.3rem solid #5fb709;
  border-radius: 0.3rem;
  padding: 0 3rem;
  cursor: pointer;
}
.order-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid: 3rem;
  height: 40rem;
  padding: 0;
  margin: 0;
  width: 100%
}
.fa-running{

  color: black;
  font-size: 30rem;
  font-weight: bold;
  height: 50rem;
}
@media  screen and (max-width: 67.6rem) {
  .order-content{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 0px;
  }
  .order-content-right,
  .order-content-left{
    height : 100vw;
    width: 100vw;
    overflow: hidden;
    justify-content: center;
    text-align: center;
  
  }
  .order-grid{
    width: 100vw;
    justify-content: center;
  }
  .order-content-left{
    padding: 0;
    margin: 0;
  }
  


  
}


</style>
