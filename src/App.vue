<template>

  <div id="app">
   
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
#app {
  font-family: Ubuntu;
  text-align: center;
  color: #2c3e50;
 
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
  color: black;
}
*{
  box-sizing: border-box;
}
</style>
