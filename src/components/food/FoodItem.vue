<template>

    <div class="container fade-in">
        
        <slot></slot>
       
        <div v-if="prices.length>1" class="meal-text">
            <div class="meal-header"><h2 class="dish-name">
                {{dishName}} <img class="veg-leaf" v-if="veg" src="../../assets/img/specialPizza/vegetarianLeaf.png" alt="">
            </h2></div>
            <div><p class= "description" >{{desc}}</p></div>
            
            <div class="price-options">
                <div class="meatItem" v-for="(meat, index) in meats" :key="meat">
                    <div class="meat-name">{{meat}}</div>
                    <div class="meat-price">${{prices[index]}}</div>
                </div>
            </div>
        </div>
        <div v-else class="meal-text">
            <div class="meal-header">
                <h2 class="dish-name">{{dishName}}</h2>
                <h2 class="single-price">${{prices[0]}}</h2>
            </div>
            <div><p class= "description" >{{desc}}</p></div>
            
        </div>
    </div>
    

</template>

<script scoped>
export default {
    name:"FoodItem",
    props:{
      picUrl: String,
      dishName: String,
      prices: Array,
      meats: Array,
      price: Number,
      desc: String,
      veg: {
          type: Boolean,
          default: false
      },
    },
    data (){
        return {
           image: require(`${this.picUrl}`)
        }
    },
    computed:{
        testData(){
            return this.prices
        },
       
    }

}
</script>
<style scoped>
    .container{
        display: flex;
        background: white;
        
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        max-width: 625px;
        height: 200px;
        overflow: hidden;
        border-radius: 5px;
        
        margin: 10px;
    }
    
    img{
        width: 30%;
    }
    .veg-leaf{
        width: 25px;
        height: 25px;
    }
    p,h1,h2,h3{
        padding: 0;
        margin:0;
    }
    .meal-text{
        
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        gap:10px;
        padding: 10px;
        text-align: left;
        width: 70%;
        
    }
    .meal-header{
        display: flex;
        justify-content: space-between;
    }
    
    .dish-name, .description{
        margin-bottom: 1em;
    }
    .description{
    
        font-style: italic;
        font-weight: 600;
        overflow: wrap;
        color: green;
    }
    .price-options{
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content:space-between;
        gap: 20px;
    }
    .price-options.pizza{

    }
    
    .meatItem{
        /* background-color: green; */
        
        width: 50px;
        margin: 0;
        font-size: 18px;
        text-align: center;
      
    
    
    }
    .meat-name{
        font-weight: bold;
    }
    .single-price,
    .meat-price{
        /* color: var(--highlight); */
        font-weight: 300;
    }
    .meat-price{
        font-weight: 300;
    }
    .single-price{
        text-align: right;
    }
    @media  (max-width: 640px) {
      
       .container{
           width: calc(100vw - 20px);
           /* background:blue; */
           margin: 10px;
           height: fit-content;
       }
       .dish-name{
           font-size: 16px;
       }
       .price-options{
           justify-content: left;
       }
       img{
           
       }
    }
</style>