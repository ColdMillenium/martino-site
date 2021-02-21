<template>
    <a class="btn">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String
        }
    }
</script>
<style scoped>
    .btn{
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: white;
        background-color: grey;
        transition: transform .2s; /* Animation */
        padding: 1em 1.5em;
        width: fit-content;
        height: fit-content;
    }
    .btn:hover{
        transform: scale(1.08);
    }
    .btn :hover{
        color: red;
    }
</style>