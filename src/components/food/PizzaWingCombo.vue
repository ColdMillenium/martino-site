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
        background: url(../../assets/img/vintage3.jpg);
        width: 15em;
        height: 20em;
        padding: 2em;
        margin: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    }
    .price{
        color: rgb(16, 78, 16);
    }

   
</style>