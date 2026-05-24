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
    padding-top: 20px;
    z-index: 10;
    padding-bottom: 10px;
    position: fixed;
    width: 100%;
  }

  .secondfnavv {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
    width: 85%;
  }

  .secondfnavimg img {
    width: 120px;
  }

  .secondfnavimgcartoon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .secondfnavimgcartoon img {
    width: 30px;
  }

  .navflexx {
    font-size: 16px;
    padding: 7px;
    border-radius: 3px;
    background: rgb(236, 236, 236);
    cursor: pointer;
  }

  .secondfnavlinks {
    padding-top: 35px;
    width: 80%;
    margin: auto;
    margin-bottom: 35px;
    text-align: center;
  }

  .secondfnavlinks a {
    color: black;
    text-decoration: none;
    margin-top: 24px;
    display: block;
    margin-bottom: 30px;
    font-family: var(--font-body);
    justify-content: center;
  }
}
</style>
