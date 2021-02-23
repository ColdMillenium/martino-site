/<template>
  <div class="filter">
      Pasta
  </div>
</template>

<script>
export default {
    name: "FoodFilterBtn",
    props:{
        isClicked: Boolean,

    },
    data(){
        return{
            defaultStyle:{

            }
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
    .filter{
          border-radius: 1em;
          background-color: blue;
    }
  
</style>