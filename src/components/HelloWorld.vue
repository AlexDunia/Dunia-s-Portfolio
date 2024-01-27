<script>
import {onMounted, ref} from 'vue'

export default{
    setup(){
    const currentimage = ref(1)
    const currentimagecount = ref(null)
    // const nextslide = ref(null)

    //  I made observation of a the const arrow fucntion and the onmounted, the latter is more vue enabled and the former is just a
    // regular constant we want to make work.

    onMounted(()=>{
        // I can be so dumb sometimes.
        // we are aiming for the value of the variable we have already set, brah, then we select the class and make it the length.
       currentimagecount.value = document.querySelectorAll('.omo').length;
       console.log(currentimagecount.value)
    })

   const next = () => {
    if(currentimagecount.value == currentimage.value){
        currentimage.value = 1
        // What this means is that if the total number, 3 is equals to 3, then we want to set it as one because there is not 4.
    } else {
    currentimage.value += 1
    }
   }


   const prev = () => {
    if(currentimage.value == 1){
        currentimage.value = 1
        // What this means is that if the total number, 3 is equals to 3, then we want to set it as one because there is not 4.
    } else {
    currentimage.value -= 1
    }
   }

    // onMounted(){
    //     const currentimagecount = ref(null)
    // },

    return{currentimage, next, prev}
},


// data: function() {
//        return {
//           current: "",
//         }
//     },

// mounted(){
//     this.current = document.querySelectorAll('.omo').length
//     console.log(this.current);
// }

}
</script>

<template>
    <div className="omo">
        <div class="navigate">

<div class="togglepagep" @click="prev">
    <i class="fas fa-chevron-left" id="right"></i>
</div>



<div class="togglepage" @click="next">
    <i class="fas fa-chevron-right"></i>
</div>


</div>
        <!-- First thing is to actually create a slot.  -->
        <!-- when passing it in a as a reusabke compnent, you need to make sure you set it up as a props, this is general news, but when using sot, you
        need to be more specific with WHERE you pass in the props, that is, you are seeting it up directly on the Slot because in real life, when we use
    the slot, it is actualy the main thing, the template itself so it should be passed on the template itself. -->
        <slot :myimg="currentimage"/>


    </div>

</template>

<style>

/* .carousel{
    position:absolute;
} */

.navigate{
    /* display:flex;
    justify-content:center;
    align-items:center;  */
    position:absolute;
    justify-content: space-between;
    top: 150px;
    width:85%;
    left: 0;
  right: 0;
  margin: 0 auto;
    display:flex;
    z-index: 3;
    /* align-items:center;  */

}

.togglepagep{
    float:left;
}

/* .togglepage{
    display:flex;
    flex:1;
}

#right{
    justify-content:flex-end;

} */

</style>
