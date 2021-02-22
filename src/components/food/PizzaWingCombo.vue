<template>
    <div class="card">
        <h1>{{size}} pizza</h1>
        <p>3 toppings</p>
        <p>{{lbs}} lb</p>
        <p>chicken wings</p>
        <h2 class="price">${{price}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'PizzaWingCombo',
        props: {
            size: String,
            lbs: String,
            price: Number
        }
    }
</script>
<style scoped>
    .card{
        background-color: rgb(248, 248, 142);
        width: 15em;
        height: 20em;
        padding: 2em;
        margin: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        filter: drop-shadow(0px 19px 20px rgba(0, 0, 0, 0.25));

    }
    .price{
        color: rgb(16, 78, 16);
    }

   
</style>