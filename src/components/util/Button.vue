<template>
   
    <a class="btn" :href="href">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            href: String
        }
    }
</script>
<style scoped>
    .btn{
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: white;
        background-color: var(--highlight)
;
        transition: transform .2s; /* Animation */
        padding: 0.75em 1.5em;
        width: fit-content;
        height: fit-content;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    .btn:hover{
        transform: scale(1.08);
    }
    .btn :hover{
        color: var(--highlight)
    }
</style>