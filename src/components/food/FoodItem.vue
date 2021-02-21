<template>
    <div>
        <img :src="picUrl" :alt="'picture of ' + dishName + 'meal'">
        {{ prices.length == 1 ? 'SINGLE' : "MULTIsdfad"}}   
        <div v-for="(meat, index) in meats" :key="meat">
          
            {{meat}}
            {{prices[index]}}
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
    }

}
</script>
<style scoped>

</style>