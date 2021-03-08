<template>
  <div class="container">
 
    <section class="welcome">
      <h1 class= "welcome-title1">Pizza & Asian </h1>
      <h2 class="welcome-title2">Fusion Kitchen</h2>
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
       <div class="desc1 "> <span>1 Pizza</span>with<span>3 toppings</span></div>
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
              
              <img class="uber-eats-logo" src="../assets/img/uberEatsLogo.png" alt="">
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
  margin: 0;
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
.welcome-title2,
.section-title{
  /* text-shadow: 0px 4px 3px rgba(75, 75, 75, 0.4),
               0px 8px 13px rgba(97, 97, 97, 0.1),
               0px 18px 23px rgba(143, 143, 143, 0.1); */
}
/* ------------- WELCOME -------------*/
.section-container{
  margin: auto;
  max-width: 1200px;
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
    width: 300px;
    height: contain-content;
    background: white;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 20px;
    
    height: 350px;
  }

  
  .special-item .price{
    position: absolute;
    bottom: 115px;
    padding: 15px;
    right: 0;
    font-size: 48px;
    color: white;
    font-weight: 600;
    filter: drop-shadow(4px 2px 3px rgba(0, 0, 0, 0.7));
  }
  .special-item .price.medium::before{
    content: "Medium size for";
    display: block;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
  }
  
  .special-item img{
    display:hidden;
  
    height: 80%;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in;

  }
  .special-item img:hover{
    transform: scale(1.1);
  }
  .special-item .text-area{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    background: white;
    padding: 10px;
    margin: 0;
  }
  .special-item .text-area h2{
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }
  .special-item .text-area .desc{
    color: green;
    margin: 10px auto;
    width: 80%;
  }
  .fa-thumbs-up{
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    margin: 15px;
    font-size: 20px;
    z-index: 500;
    background: var(--highlight);
    padding: 15px;
    border-radius: 100%;
    filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.5));
    
  }


/* ------------- Classic Combo -------------*/

.classic-combo .section-container{
   background: url(./../assets/img/ClassicPizzaBackground.png);
   background-size: cover;
   border-radius: 3px;
   padding: 20px;
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
.classic-left ,
.classic-right{
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px ;
  padding-bottom: 2.5rem;
  overflow: hidden;

}
.classic-left{
  flex-direction: column;
  gap: 20px;
  
}
.classic-pizza,
.classic-pasta,
.classic-asian{
  height: 150px;
  width: 150px;
  
  /* border: 4px solid var(--highlight); */
  /* filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.178)); */
}
.classic-pizza{
  height: 200px;
  width: 300px;
}

.classic-plus{
  font-size: 50px;
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
  font-size: 24px;
  margin:5px auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.637);
  border-radius: 3px;
  width: fit-content;
  padding: 20px;
  font-family: 'Roboto';
}
.classic-combo-desc div{
  margin: 20px;
}


.desc1, .desc3{
  font-weight: 600;
  font-size: 24px;
}
.desc2{
  font-weight: 300;
}
.desc3{
  font-size: 40px;
}
span{
  color: var(--highlight);
 
}


.classic-combo-prices,
.classic-combo-price{
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-evenly
}
.classic-combo-price{
  flex-direction: column;
  
  /* border: 3px solid var(--highlight); */
  padding: 0.5em 1.5em;
  border-radius: 5px
}
.classic-price{
  font-weight: 600;
  font-size: 36px;
   filter: drop-shadow(4px 2px 3px rgba(0, 0, 0, 0.7));
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
.order-now{


}

.order-content{
  display: flex;
  justify-content: space-between;
  height: 500px;;
  padding: 0;
}
.order-content-left{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 50px; */
  
  width: 50%;
  text-align: left;
  gap: 20px;
 
}
.order-content-left p{
  font-size: 24px;
}
.order-content-left *{
  margin-left: 0;
  padding-left: 0;

}
.order-info{
  width: 500px;

  text-align: left;
  margin-right: 30px;
  width: 80%;
  padding: 20px;
  border: 3px solid var(--highlight);
  border-radius: 3px;
  margin-bottom: 20px

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
.order-content-right img{
  width: 100%;
}
.order-now-section{
 
}
.order-now-section .title{
  font-size: 24px;
  margin-bottom: 1.5rem;
  font-weight: 600;
}
.address .link{
  text-decoration: none;
  
}
.uber-eats-logo{
  height: 100px;
  display: inline block ;
  border: 3px solid #5fb709;
  border-radius: 3px;
  padding: 0 30px;
}
.order-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid: 30px;
  height: 400px;
  padding: 0;
  margin: 0;
}
.fa-running{

  color: black;
  font-size: 300px;
  font-weight: bold;
  height: 500px;
}


</style>
