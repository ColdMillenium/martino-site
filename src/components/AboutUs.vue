<template>
  <section class="about-us">
   
      <div class="container section-container">
        <div class="about section-title">Our Story</div>
        <div class="story-content">
           
            <p class="story">For the past 17 years, Martino has been working hard to serve the community while maintaining quality and service. We started out as a simple pizza store in 2003, establishing our reputation as the community’s “go to” pizza place. Since then we have expanded our menu and concept to combine Italian and Asian foods together, conveniently served in one location.

            
            </p>
    
            <p class="story"><br><br>This unique blend of culture is just what Toronto needs as a culturally diverse city. We have built relationships with the community over the course of years, and that relationship is still strong as ever! As time goes by, the community changes and so do people, but Martino will continue to deliver the quality food that people love from us. Our words are only as good as our actions, and we will continue to uphold our values to better serve the community.</p>
        
            
        </div>
        <img class="logo" src="../assets/img/martinoLogo.png" alt="">
   
      </div>
     
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    /* ------------- About us -------------*/
    .section-container.container{
        background:rgba(0, 0, 0, 0.71);
        max-width: 1000px; 
    
    }
    .about.section-title,
    .story,
    .section-container .logo
    {
        filter: drop-shadow(4px 2px 3px rgba(0, 0, 0, 0.7));
    }
.about-us{
 display:flex;
 justify-content:center;

 background: url(../assets/img/OurStoryBackground.png);

 background-size: cover;
 color: white;
}
.section-container 
.logo{
    width: 250px;
    margin: 25px;
}
.story{
  width: 75%;
  display: inline;
  line-height:2;
  text-align: left;
 
}
.story-content{
  margin: 10px 60px;
  font-size: 18px;
}
/* img{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
} */
.about-us-content{
  
  width: 1200px;
  text-align: left;
  
}
</style >