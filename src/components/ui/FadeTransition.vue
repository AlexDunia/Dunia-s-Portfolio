<template>
  <transition name="soft-slide-fade" mode="out-in">
    <slot />
  </transition>
</template>

<style scoped>
.soft-slide-fade-enter-active,
.soft-slide-fade-leave-active {
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.soft-slide-fade-enter-from,
.soft-slide-fade-leave-to {
  opacity: 0;
  transform: translateY(18px) scale(0.98);
}

.soft-slide-fade-enter-to,
.soft-slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.soft-slide-fade-enter-active {
  animation: fadeGlow 0.65s ease forwards;
}

.soft-slide-fade-leave-active {
  animation: fadeWarm 0.65s ease forwards;
}

@keyframes fadeGlow {
  0% {
    filter: blur(6px);
  }
  100% {
    filter: blur(0);
  }
}

@keyframes fadeWarm {
  0% {
    filter: blur(0);
  }
  100% {
    filter: blur(3px);
  }
}
</style>
