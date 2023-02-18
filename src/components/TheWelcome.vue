<script setup>

</script>

<template>
    <div className="omo"> 
        <transition name="Welcome">
        <!-- First thing is to actually create a slot.  -->
         <slot/>
        </transition>
    </div>
  
</template>

<style>

</style>
