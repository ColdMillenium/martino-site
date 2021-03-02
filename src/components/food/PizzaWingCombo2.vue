<template>
  <div class="pw-container">
        <img class="wing-img" src="../../assets/img/Wings/wingsTransparent.png" alt="">
        <div class="pw-ui">
            <div class="pw-options">
                <div  
                    v-for="(option, index) in options" 
                    v-on:click="updateSelected(index)" 
                    :class="btnClass(index)"
                    :key="option"
                >
                    {{option.size}}
                </div>
            </div>
            <div class="desc">
                <div class="pw-subtitle">  {{size}} Combo</div>
                <p class="chicken">3 topping pizza AND {{chicken}} LB Chicken Wings!</p>
                <p class="price">${{price}}</p>
            </div>
            
            
            
        </div>
  </div>
</template>

<script>
export default {
    name: "PizzWingCombo2",
    data(){
        return{
            selected: 0,
            options: [
                    {
                    size: "small",
                    chicken: "1",
                    price: "19.65"
                },
                {
                    
                    size: "medium",
                    chicken: "1",
                    price: "23.25"
                },
                {
                    size: "large",
                    chicken: "1.5",
                    price: "29.95"
                },
                {
                    size: "x-large",
                    chicken: "2",
                    price: "38.49"
                },
                {
                    size: "family",
                    chicken: "2.5",
                    price: "41.79"
                },
                {
                    size: "party",
                    chicken: "3",
                    price: "54.05"
                },
            ]
        }
    },
    computed:{
        price(){
            return this.options[this.selected].price;
        },
        size(){
            return this.options[this.selected].size;
        },
        chicken(){
            return this.options[this.selected].chicken;
        },
    },
    methods:{
        updateSelected(index){
            this.selected = index;
        },
        btnClass(index){
            if(this.selected === index){
                return "pw-btn selected"
            }else{
                return "pw-btn"
            }
        }
    }
}
</script>

<style scoped>
    .pw-container{
        display:flex;
        text-align: center;
        color: white;
        font-weight: bold;
    }
    .wing-img{
        height: 300px;
    }
    .pw-ui{
        display:flex;
        flex-direction: column;
        gap: 30px;
    }
    .pw-options{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 400px;
        gap: 20px;
    }
    .pw-btn{
        display:grid;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 1em;
        background-color: var(--highlight);
        width: 100px;
        border-radius: 3px;
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    .pw-btn:hover{
        transform: scale(1.08);
    }
    .pw-btn :hover{
        color: var(--highlight)
    }
    .selected{
        background: rgb(255, 244, 97);
        color: var(--highlight);
    }

    .desc{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .desc *{
        padding: 0;
        margin: 0;
       
    }
    .pw-subtitle{
        font-family: "Roboto";
        font-size: 32px;
        font-weight: 900;
    }
    .price{
        font-size: 64px;
        
        
    }
</style>