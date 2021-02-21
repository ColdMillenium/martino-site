<template>
    <div class="container">
        <img :src="picUrl" :alt="'picture of ' + dishName + 'meal'">
        {{testData}}
        <div v-if="prices.length>1" class="meal-text">
            <div><h2 class="dish-name">{{dishName}}</h2></div>
            <div><p class= "description" >{{desc}}</p></div>
            
            <div class="price-options">
                <div class="meatItem" v-for="(meat, index) in meats" :key="meat">
                    <p>{{meat}}</p>
                    <h3>{{prices[index]}}</h3>
                </div>
            </div>
        </div>
        <div v-else class="meal-text">
            <div class="meal-header">
                <h2 class="dish-name">{{dishName}}</h2>
                <h2 class="single-price">{{prices[0]}}</h2>
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
      
        background-color: lightgrey;
        width: 20em;
        
    }
    img{
        text-align:left;
        width: 100%;
        height: 30%;
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
        text-align: center;
    }
    
    .meatItem{
        /* background-color: green; */
        
        margin: 0;
    }
</style>