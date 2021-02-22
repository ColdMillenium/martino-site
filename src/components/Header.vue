<template>
  <div class="container">
    <div class="left">
      <img class="logo" src="../assets/img/martinoLogo.png" alt="">
      <div>
        178 Dupont Street, Toronto 
      </div>
    <div>|</div>
    <div>416 929 6000</div>
    </div>
    <div class="right">
      <a class="menu-item" href="Home">Home</a>
      
        <router-link to="/MENU">
          <a class="menu-item" href="Menu">MENU</a>
        </router-link>
      
      <a class="menu-item" href="Order Now">Order Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: absolute;
  width: calc(100vw );
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: black;

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
  
}
.right{
  margin-right: 0;
  margin:0;
  display:flex;
  gap: 5em;
  font-size: 1.25em;
  font-weight: bold;
  color: white;
}
.menu-item{
  text-decoration: none;
  color: white;
}



</style>
