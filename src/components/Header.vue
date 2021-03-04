<template>
  <div class="container">
    <div class="left">
       <router-link  style="text-decoration: none;" to="/Home" >
           <img class="logo" src="../assets/img/martinoLogo.png" alt="">
      </router-link>
     
      <div class="text">
        <em> Dupont Street, Toronto</em> 
      </div>
    <div class="text">|</div>
    <div class="text"><em>416 - 929 - 6000</em></div>
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
    <div ref="sideBar" :class="sideBarClass" >
       <router-link  style="text-decoration: none;" to="/Home" >
          <div class="sideBar-item"
          >
            Home
          </div>
      </router-link>
      <router-link  style="text-decoration: none;" to="/Menu" >
          <div class="sideBar-item"
          >
            Menu
            </div>
      </router-link>
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
    },
    sideBarClass(){
      if(this.sideBarActive){
        return "sideBar sideBarActive"
      }else{
        return "sideBar"
      }
    },
   
  },
  methods:{
    toggleSideBar(){
      console.log(this.$refs);
      this.sideBarActive = !this.sideBarActive;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* -------------- Header Nav -------------- */
.container{
  position: sticky;
  width: calc(100vw );
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: white;
;
  padding: 0 2em;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

}

.left{
  margin-left: 0;
  margin:0;
  display:flex;
  align-items: center;
  gap: 2em;

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
 
  height: 100%;
}


.menu-item{
  text-decoration: none;
 
}
.menu-item-hover{
  background-color: blue;
}

@media (max-width: 899px) { 
  .text{
    display:none;
  }
}


/* -------------- Hamburger Button -------------- */
.icon{
    background: none;
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
    background-color: rgb(233, 53, 53);
    height: 3px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
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

button{
  z-index: 1000;
  display: none;
  transform: scale(1.2);
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

@media (max-width: 899px) { 
  button{
    display:inline-block;
  }
}

/* -------------- SideBar  -------------- */
.sideBar{
  height: 100vh;
  background:url(../assets/img/vintage3.jpg);
;
  position: fixed;
  width: 100vw;
  transition: transform 0.5s linear;
  top:0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 1px;
  padding: 100px;
  transform: translateX(150vw);
}
.sideBar-item{
  color: #2c3e50;
  font-size: 68px;
  font-weight: 600;
}
.sideBarActive{
    transform: translateX(0vw);
  }
@media (min-width: 899px) { 
  .sideBarActive{
    transform: translateX(150vw);
  }
}





</style>
