<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useScrollToSection } from '@/composables/useScrollToSection'

const { scrollToSection } = useScrollToSection()
const isMenuVisible = ref(false)

const navLinks = [
  { label: 'Home', hash: '#home', sectionId: 'home' },
  { label: 'Projects', hash: '#projects', sectionId: 'projects' },
  { label: 'About me', hash: '#aboutme', sectionId: 'aboutme' },
  { label: 'Contact', hash: '#contact', sectionId: 'contact' }
]

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

const handleLinkClick = (sectionId) => {
  scrollToSection(sectionId)
  isMenuVisible.value = false
}
</script>

<template>
  <nav class="fnavvv" aria-label="Mobile navigation">
    <div class="secondfnavv">
      <div class="secondfnavimg">
        <img src="@/assets/images/add.png" alt="Branding mark" />
      </div>

      <div class="secondfnavimgcartoon">
        <div class="navflexx" v-if="!isMenuVisible" @click="toggleMenu">
          <i class="fa-solid fa-bars fa-2x"></i>
        </div>
        <div class="navflexx" v-else @click="toggleMenu">
          <i class="fa-solid fa-xmark fa-2x"></i>
        </div>
        <div>
          <img src="@/assets/images/adcartoon.png" alt="Alex Dunia cartoon portrait" />
        </div>
      </div>
    </div>

    <div class="secondfnavlinks" v-if="isMenuVisible">
      <RouterLink
        v-for="link in navLinks"
        :key="link.sectionId"
        :to="link.hash"
        @click="handleLinkClick(link.sectionId)"
      >
        {{ link.label }}
      </RouterLink>
      <a href="https://dev.to/dunia">My Articles</a>
    </div>
  </nav>
</template>

<style scoped>
.fnavvv {
  display: none;
}

@media (max-width: 900px) {
  .fnavvv {
    display: block;
    background-color: white;
    padding: 12px var(--page-gutter) 10px;
    z-index: 10;
    position: fixed;
    width: 100%;
    box-shadow: 0 8px 24px rgba(10, 10, 10, 0.08);
  }

  .secondfnavv {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
    width: min(720px, 100%);
    gap: 14px;
  }

  .secondfnavimg img {
    width: clamp(86px, 32vw, 120px);
  }

  .secondfnavimgcartoon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .secondfnavimgcartoon img {
    width: clamp(24px, 8vw, 30px);
  }

  .navflexx {
    font-size: clamp(11px, 4vw, 16px);
    padding: 7px;
    border-radius: 3px;
    background: rgb(236, 236, 236);
    cursor: pointer;
    line-height: 1;
  }

  .secondfnavlinks {
    padding-top: 18px;
    width: min(560px, 100%);
    margin: auto;
    margin-bottom: 8px;
    text-align: center;
  }

  .secondfnavlinks a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 12px 0;
    margin-bottom: 4px;
    font-family: var(--font-body);
    justify-content: center;
  }
}

@media (max-width: 280px) {
  .secondfnavimgcartoon img {
    display: none;
  }

  .secondfnavlinks a {
    padding: 9px 0;
    font-size: 12px;
  }
}
</style>
