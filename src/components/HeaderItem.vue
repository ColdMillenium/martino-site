/<template>
  <router-link  style="text-decoration: none;" :to="linkTo">
          <div
            v-bind:style="[defaultStyle, hoverStyle]" 
            @mouseover="hovered = true" 
            @mouseleave="hovered = false" 
          >
            {{text}}
          </div>
    </router-link>
</template>

<script>
export default {
    props: {
        linkTo: String,
        text: String
    },
    data(){
        return{
            hovered : false,
            defaultStyle: {
                textDecoration: 'none',
                color: 'white',
                height: "100%",
                padding: "0.2em"
            },
        }
    },
    computed:{
        hoverStyle: function () {
            if(this.hovered){
                return {
                    color: 'var(--highlight)'
                }
            }else{
                return {
                    color: '#2c3e50'
                }
            }
        }
    }
}
</script>

<style>
    
</style>