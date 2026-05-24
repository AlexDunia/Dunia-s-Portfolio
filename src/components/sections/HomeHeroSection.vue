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
        <img src="@/assets/images/adcartoon.png" alt="Alex Dunia cartoon illustration" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  background:
    radial-gradient(circle at 78% 48%, rgba(225, 199, 63, 0.12), transparent 24%),
    linear-gradient(135deg, #5a0d39 0%, #450c2f 50%, #2a061d 100%);
  margin: auto;
  padding: clamp(116px, 14vw, 190px) var(--page-gutter) clamp(64px, 10vw, 120px);
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  justify-content: space-between;
  width: min(1160px, 100%);
  margin: auto;
  color: white;
  gap: clamp(28px, 6vw, 64px);
  align-items: center;
}

.hero-text {
  min-width: 0;
  z-index: 1;
}

.hero-text p {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  margin-top: 14px;
  line-height: 1.6;
  max-width: 640px;
}

.hero-cta {
  position: relative;
  display: inline-flex;
  margin-top: 18px;
  min-height: 52px;
}

.hero-text h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.45rem, 4vw, 4.25rem);
  line-height: 1.12em;
  letter-spacing: 0;
}

.hero-illustration {
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(360px, 30vw);
  height: min(360px, 30vw);
  min-width: 0;
  min-height: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(225, 199, 63, 0.16), transparent 63%),
    rgba(0, 0, 0, 0.18);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
  transition: transform 0.55s ease, box-shadow 0.55s ease, background 0.55s ease;
}

.hero-illustration img {
  width: min(275px, 78%);
  border-radius: 50%;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.28));
  transition: transform 0.55s ease, filter 0.55s ease;
}

.hero-illustration:hover {
  transform: translateY(-8px) scale(1.04);
  background:
    radial-gradient(circle, rgba(225, 199, 63, 0.24), transparent 64%),
    rgba(0, 0, 0, 0.2);
  box-shadow: 0 36px 86px rgba(0, 0, 0, 0.34);
}

.hero-illustration:hover img {
  transform: scale(1.12) rotateY(-8deg);
  filter: drop-shadow(0 24px 34px rgba(0, 0, 0, 0.34)) saturate(1.08);
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
  font-family: var(--font-body);
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
    grid-template-columns: 1fr;
  }

  .hero-illustration {
    margin: 42px auto 0;
    width: min(240px, 68vw);
    height: auto;
  }

  .hero-illustration img {
    width: min(220px, 78%);
  }

  .hero-text h1 {
    font-size: clamp(2rem, 8.5vw, 2.65rem);
    line-height: 1.18em;
  }

  .btn-one {
    padding: 12px 38px;
  }
}

@media (max-width: 480px) {
  .home-hero {
    padding-top: 96px;
    padding-bottom: 54px;
  }

  .hero-text p {
    font-size: 0.82rem;
    line-height: 1.65;
  }

  .hero-cta,
  .hero-cta a {
    width: 100%;
  }

  .btn-one,
  .btn-two {
    width: 100%;
  }
}

@media (max-width: 280px) {
  .home-hero {
    padding-top: 76px;
    padding-bottom: 38px;
  }

  .hero-text h1 {
    font-size: 1.32rem;
  }

  .hero-text p {
    font-size: 0.72rem;
  }

  .hero-illustration {
    width: min(150px, 74vw);
    margin-top: 24px;
  }

  .btn-one {
    padding: 8px 12px;
    font-size: 0.72rem;
    line-height: 24px;
  }
}
</style>
