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
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
   Header, 
   Footer,
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
@import url('https://fonts.googleapis.com/css2?family=Fascinate&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Amatic+SC:wght@400;700&family=Fascinate&family=Oi&family=Oswald:wght@400;500;600&family=Roboto+Condensed:ital,wght@0,300;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Amatic+SC:wght@400;700&family=Fascinate&family=Oi&family=Oswald:wght@400;500;600&family=Roboto+Condensed:ital,wght@0,300;1,300&display=swap');

:root{
    --black: #2c3e50;
    --highlight:  rgb(202, 53, 53);
}
#app {
  font-family:  'Oswald';
  text-align: center;
  color: var(--black);
}
section{
  margin:0;
  
} 
.section-title{
  position: relative;
  font-size: 60px;
  font-weight: 600;
  width: fit-content;
  margin: 3rem auto;
 
}
p{
  font-family: 'Roboto';
  font-size: 1.6rem;
}
h1{

}
h2{
  font-size: 2.4rem;
}
body, h1, h2, h3{
  margin: 0;
  padding:0;
  width: 100vw;
  overflow-x: hidden;
  color: #2c3e50;
  min-height: 100%;

}
body{
    max-width: 100vw;
    min-width: 47.8rem;
   
}
*{
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
   font-size: 62.5%;
}

.menu-btn{
        display:grid;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      
        /* background-color: var(--highlight); */
        color: var(--black);
        padding: 1rem;
        width: 10rem;
        border-radius: 0.3rem;
        cursor: pointer;
        border: 3px solid var(--highlight);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
.menu-btn:hover{
    transform: scale(1.08);
}
.menu-btn :hover{
    color: var(--highlight)
}
.menu-btn.selected{
  /* background: rgb(255, 244, 97); */
  background: var(--highlight);
  color: white;
  font-weight: bold;
}
</style>
