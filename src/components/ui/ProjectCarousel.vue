<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  },
  showDefaultControls: {
    type: Boolean,
    default: true
  }
})

const currentIndex = ref(0)
const totalSlides = computed(() => props.slides.length)

const nextSlide = () => {
  if (totalSlides.value === 0) {
    return
  }

  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

const prevSlide = () => {
  if (totalSlides.value === 0) {
    return
  }

  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

const goToSlide = (index) => {
  if (totalSlides.value === 0 || index === currentIndex.value) {
    return
  }

  currentIndex.value = index
}
</script>

<template>
  <div class="omo carousel">
    <slot
      :currentIndex="currentIndex"
      :nextSlide="nextSlide"
      :prevSlide="prevSlide"
      :goToSlide="goToSlide"
    />
    <div class="navigate" v-if="totalSlides && showDefaultControls">
      <div class="togglepagep" @click="prevSlide">
        <span class="arrow arrow-left"></span>
      </div>
      <div class="togglepage" @click="nextSlide">
        <span class="arrow arrow-right"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.omo {
  position: relative;
}

.navigate {
  position: static;
  justify-content: space-between;
  margin: 24px auto 0;
  width: min(360px, 100%);
  display: flex;
  gap: 14px;
}

.togglepage,
.togglepagep {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f1f1f;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.togglepage:hover,
.togglepagep:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.35);
}

.arrow {
  display: block;
  width: 18px;
  height: 18px;
  position: relative;
}

.arrow::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  top: 50%;
  left: 3px;
  transform-origin: center;
}

.arrow::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-left::after {
  left: 4px;
  transform: translateY(-50%) rotate(-135deg);
}

.arrow-right::after {
  right: 4px;
  transform: translateY(-50%) rotate(45deg);
}

.togglepage:hover .arrow,
.togglepagep:hover .arrow {
  animation: arrowPulse 0.6s ease-in-out infinite;
}

@keyframes arrowPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
