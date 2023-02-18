<script>
import Hello from '@/components/HelloWorld.vue'
import Welcome from '@/components/TheWelcome.vue'



export default {
  setup() {
    const allslides = ["/src/assets/image1.jpg", "/src/assets/image2.jpg", "/src/assets/image3.jpg"]

    return {allslides};
  },

components: { Hello, Welcome },
}

</script>
<template>
  <Hello class="carousel"> 
    <Welcome v-for="(oneslide, index) in allslides" :key="index"> 
      
      <!-- <img src="../assets/image2.jpg"/> -->

        <!-- <img :src=require("../assets/images/bagel2.jpg") -->
        <!-- <img :src=require("@/assets/${oneslide}.jpg")/> -->
<!-- 
         <img src="../assets/images/image2.jpg"/> -->
         <div>
          <img :src="`${oneslide}`"/>
          <!-- <img :src="require(`../assets/${oneslide}.jpg`)" alt=""/> -->
          <!-- <img :src="require(`@/assets/${oneslide}.jpg`)" /> -->
          <!-- <img src="`@/assets/images/${oneslide}.jpg`"/> -->
          <!-- <img :src="`../assets/${oneslide}.jpg`" alt=""/>
          <img :src=require("`../assets/${oneslide}.jpg`") alt=""/> -->
         </div>
      

   



</Welcome>
  </Hello>

</template>

<style>
.carousel{
  max-height:100vh;
  height:100vh;
}
</style>


