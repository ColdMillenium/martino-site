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



</style>
