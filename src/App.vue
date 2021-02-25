<template>

  <div id="app">
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
   
     <!-- <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/Home'>Home</router-link>
        <router-link to='/Menu'>Menu</router-link>
    </nav> -->
    
    <router-view/>
  </div>
</template>

<script>




export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
      currentRoute: window.location.pathname
    }
  },
  computed: {
   
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,500&display=swap');
:root{
    --black: #2c3e50;
    --highlight:  rgb(202, 53, 53);
}
#app {
  font-family: Ubuntu;
  text-align: center;
  color: var(--black);
}
p{
  font-family: Roboto;
}
h1{

}
h2{
 
}
body, h1, h2, h3{
  margin: 0;
  padding:0;
  width: 100vw;
  overflow-x: hidden;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
</style>
