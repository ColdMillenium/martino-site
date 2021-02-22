<template>
    <div class="container">
        <img :src="picUrl" :alt="'picture of ' + dishName + 'meal'">
       
        <div v-if="prices.length>1" class="meal-text">
            <div><h2 class="dish-name">{{dishName}}</h2></div>
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

<script>
export default {
    name:"FoodItem",
    props:{
      picUrl: String,
      dishName: String,
      prices: Array,
      meats: Array,
      price: Number,
      desc: String
    },
    data (){
        return {
            pussy: this.instance.prices.length,
            chicken: 'beach'
        }
    },
    computed:{
        testData(){
            return this.prices
        }
    }

}
</script>
<style scoped>
    .container{
      
        background-color: white;
        width: 20em;
        filter: drop-shadow(0px 19px 20px rgba(0, 0, 0, 0.25));
        
        
    }
    img{
        text-align:left;
        width: 100%;
        height: 50%;
    }
    p,h1,h2,h3{
        padding: 0;
        margin:0;
    }
    .meal-text{
        margin-left:0;
        display:flex;
        flex-direction: column;
        gap:10px;
        padding: 20px;
        text-align: left;
        width: 100%;
        
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
    }
    .price-options{
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        
    }
    
    .meatItem{
        /* background-color: green; */
        
        width: 50px;
        margin: 0;
        font-size: 18px;
    }
    .meat-price{
        font-weight: bold;
    }
    .single-price{
        text-align: right;
    }
</style>