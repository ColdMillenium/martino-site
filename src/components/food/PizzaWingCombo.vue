<template>
    <div>
        <h1>{{size}} pizza</h1>
        <p>3 toppings</p>
        <p>{{lbs}} lb chicken wings</p>
        <h3>{{price}}</h3>
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
<style lang="stylus" scoped>

</style>