<script setup>
import { RouterLink } from 'vue-router'

import { useScrollToSection } from '@/composables/useScrollToSection'

const { scrollToSection } = useScrollToSection()

const scrollToProjects = () => {
  scrollToSection('projects')
}
</script>

<template>
<section id="home" class="home-hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>
          Hi, I'm Alex Dunia,
          <span class="yellow"> A developer, designer </span>
          and
          <span class="yellow"> Technical Writer</span>
        </h1>

        <p>
          I code Web apps for companies and individuals and create the best technical writing materials. Let's talk about
          your project today.
        </p>

        <div class="hero-cta">
          <RouterLink to="#projects" @click="scrollToProjects">
            <button class="btn-two">See my work</button>
            <button class="btn-one">See my work</button>
          </RouterLink>
        </div>
      </div>

      <div class="hero-illustration">
        <span class="avatar-ring"></span>
        <img src="@/assets/images/adcartoon.png" alt="Alex Dunia cartoon illustration" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  background-color: #450c2f;
  margin: auto;
  padding-top: 140px;
  padding-bottom: 130px;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  color: white;
  gap: 32px;
  align-items: center;
}

.hero-text {
  flex-basis: 53%;
}

.hero-text p {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 200;
  margin-top: 14px;
  line-height: 1.6;
}

.hero-cta {
  position: relative;
  display: inline-flex;
  margin-top: 24px;
  min-height: 58px;
}

.hero-text h1 {
  font-weight: 100;
  font-size: 44px;
  line-height: 1.2em;
}

.hero-illustration {
  perspective: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
}

.hero-illustration img {
  width: 230px;
  border-radius: 50%;
}

.yellow {
  color: #e1c73f;
}

.btn-one {
  background: #ffffff;
  align-items: center;
  padding: 12px 48px;
  font-weight: 600;
  font-size: 13px;
  line-height: 32px;
  font-family: 'Poppins', sans-serif;
  color: #1c0f1d;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 2;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.btn-two {
  position: absolute;
  inset: 0;
  border: 2px solid #f7c931;
  border-radius: 6px;
  background: transparent;
  color: #f7c931;
  z-index: 1;
  pointer-events: none;
}

.hero-cta:hover .btn-one {
  transform: translate(-6px, -6px);
}

@media (max-width: 900px) {
  .hero-content {
    display: block;
  }

  .hero-illustration {
    margin-top: 100px;
    width: 240px;
    height: 240px;
  }

  .hero-text h1 {
    font-size: 34px;
    line-height: 1.4em;
  }

  .btn-one {
    padding: 12px 38px;
  }
}
</style>
