<script setup>
import { RouterLink } from 'vue-router'

import { useScrollToSection } from '@/composables/useScrollToSection'

const { scrollToSection } = useScrollToSection()

const navLinks = [
  { label: 'Home', hash: '#home', sectionId: 'home' },
  { label: 'Projects', hash: '#projects', sectionId: 'projects' },
  { label: 'About me', hash: '#aboutme', sectionId: 'aboutme' },
  { label: 'Contact', hash: '#contact', sectionId: 'contact' }
]

const handleScroll = (sectionId) => {
  scrollToSection(sectionId)
}
</script>

<template>
  <header class="fnav" id="hero">
    <div class="fnavv">
      <div class="fnavimg">
        <img src="@/assets/images/add.png" alt="Branding mark" />
      </div>

      <nav class="fnavlinks">
        <RouterLink
          v-for="link in navLinks"
          :key="link.sectionId"
          :to="link.hash"
          @click="handleScroll(link.sectionId)"
        >
          {{ link.label }}
        </RouterLink>
        <a href="https://dev.to/dunia">My Articles</a>
      </nav>

      <div class="fnavimgcartoon">
        <img src="@/assets/images/adcartoon.png" alt="Alex Dunia cartoon portrait" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.fnav {
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  z-index: 3;
  width: 100%;
  box-shadow: rgba(74, 74, 74, 0.1) 5px 5px 10px;
  background: white;
}

.fnavv {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.fnavimg img {
  width: 150px;
}

.fnavimgcartoon img {
  width: 42px;
}

.fnavlinks a {
  text-decoration: none;
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 48px;
  color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 900px) {
  .fnav {
    display: none;
  }
}
</style>
