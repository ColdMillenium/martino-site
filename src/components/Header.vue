<template>
  <div class="container">
    <div class="left">
      Martino
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
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.left{
  margin-left: 0;
  margin:0;
}
.right{
  margin-right: 0;
  margin:0;
  display:flex;
  gap: 3px;
}
.menu-item{
  text-decoration: none;
  color: black;
}



</style>
