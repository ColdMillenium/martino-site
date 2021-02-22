<template>
  <div class="container">
    <div class="left">
      <img class="logo" src="../assets/img/martinoLogo.png" alt="">
    </div>
    <div class="right">
      <a class="menu-item" href="Home">Home</a>
      <a class="menu-item" href="Menu">Menu</a>
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
  width: calc(100vw - 60px);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1em;

}
.left{
  margin-left: 0;
  margin:0;

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
