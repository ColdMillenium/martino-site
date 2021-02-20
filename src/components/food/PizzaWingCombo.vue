<template>
    <div class="card">
        <h1>{{size}} pizza</h1>
        <p>3 toppings</p>
        <p>{{lbs}} lb</p>
        <p>chicken wings</p>
        <h2>${{price}}</h2>
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
        background-color: grey;
        width: 15em;
        height: 20em;
        padding: 2em;
        margin: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

   
</style>