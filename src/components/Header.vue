<template>
  <div class="container">
    <div class="left">
      <img class="logo" src="../assets/img/martinoLogo.png" alt="">
      <div class="text">
        178 Dupont Street, Toronto 
      </div>
    <div class="text">|</div>
    <div class="text">416 929 6000</div>
    </div>
    <div class="right">
     
        <HeaderItem class="text" text="Home" linkTo="/Home"/>
        <HeaderItem class="text" text="Menu" linkTo="/Menu"/>
        
        <button v-on:click="toggleSideBar()" :class="buttonClass" id="toggle">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </button>
       
      
      
    </div>
  </div>
</template>

<script>
import HeaderItem from './HeaderItem.vue'
export default {
  name: 'Header',
  components:{
    HeaderItem,
  },
  props: {
    msg: String
  },
  data(){
    return {
      sideBarActive: false
    }
  },
  computed:{
    buttonClass(){
      if(this.sideBarActive){
        return "icon active"
      }else{
        return "icon"
      }
    }
  },
  methods:{
    toggleSideBar(){
      console.log("bitchin")
      this.sideBarActive = !this.sideBarActive;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: sticky;
  width: calc(100vw );
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: black;
  padding: 0 2em;
  z-index: 1000;

}
.left{
  margin-left: 0;
  margin:0;
  display:flex;
  align-items: center;
  gap: 2em;
  color: white;
}
.logo{
 
  height: 40px;
   margin: 12px;
  
}

.right{
  margin-right: 0;
  margin:0;
  margin-top: 0;
  display:flex;
  
  align-items: center;
  gap: 5em;
  font-size: 1.25em;
  font-weight: bold;
  color: white;
  height: 100%;
}
@media (max-width: 899px) { 
  .right,
  .text{
    display:none;
  }
}
.menu-item{
  text-decoration: none;
  color: white;
}
.menu-item-hover{
  background-color: blue;
}
.icon{
    background: black;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: relative;
    height: 40px;
    width: 40px;
    color: black;
}

.icon:focus{
    outline: 0;
}

.icon .line{
    background-color: white;
    height: 3px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;

    transition: opacity 0.6s linear ,transform 0.6s linear;
}
.icon .line2{
    top:auto;
    bottom: 18.5px;
    opacity: 1;
}
.icon .line3{
    top:auto;
    bottom: 10px;
    
}


button.active .line1{
  transform: rotate(-405deg) translateY(6px) translateX(-6px);
}
button.active .line2{
  opacity: 0;
}
button.active .line3{
  transform: rotate(405deg) translateY(-6px) translateX(-6px);
}




</style>
