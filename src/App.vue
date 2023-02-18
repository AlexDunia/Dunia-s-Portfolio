<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <!-- Usually, hello would be rendered without another thing to close it but since we have a slot, something
  actually needs to live inside the hello.  -->
  
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
  
  <RouterView />
 
</template>

