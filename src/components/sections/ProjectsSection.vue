<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FadeTransition from '@/components/ui/FadeTransition.vue'
import ProjectCarousel from '@/components/ui/ProjectCarousel.vue'

import FigIcon from '@/assets/images/figmaa.png'
import GithubIcon from '@/assets/images/github.png'
import LaravelIcon from '@/assets/images/laravel.png'
import PhotoshopIcon from '@/assets/images/photoshop.png'
import PhpIcon from '@/assets/images/php.png'
import ReactIcon from '@/assets/images/react.png'
import VueIcon from '@/assets/images/vue.png'
import XdIcon from '@/assets/images/xd.png'
import { featuredProjects } from '@/constants/portfolioData'

const router = useRouter()
const isOpeningProject = ref(false)
const toastMessage = ref('')

const stackIcons = {
  'After Effects': { label: 'Ae' },
  CSS: { label: 'CSS' },
  Figma: { image: FigIcon },
  GitHub: { image: GithubIcon },
  HTML: { label: 'HTML' },
  Laravel: { image: LaravelIcon },
  MySQL: { label: 'DB' },
  'Next.js': { label: 'N' },
  Paystack: { label: 'P' },
  Photoshop: { image: PhotoshopIcon },
  PHP: { image: PhpIcon },
  React: { image: ReactIcon },
  'SEO Optimization': { label: 'SEO' },
  Stripe: { label: 'S' },
  Tailwind: { label: 'TW' },
  'Vanilla JS': { label: 'JS' },
  'Vue 3': { image: VueIcon },
  'Vue 3 Widgets': { image: VueIcon },
  WordPress: { label: 'WP' },
  'Adobe XD': { image: XdIcon }
}

const indexedProjects = featuredProjects.map((project, index) => ({
  ...project,
  originalIndex: index
}))

const visibleProjects = (currentIndex) =>
  indexedProjects.slice(currentIndex).concat(indexedProjects.slice(0, currentIndex)).slice(0, 4)

const getStackIcon = (tool) => stackIcons[tool] ?? { label: tool.slice(0, 2).toUpperCase() }

const viewProject = (slug) => {
  if (isOpeningProject.value) {
    return
  }

  const route = router.resolve({ name: 'projectDetail', params: { slug } })
  const projectTab = window.open('about:blank', '_blank')
  if (projectTab) {
    projectTab.opener = null
    projectTab.document.write(`
      <html>
        <head><title>Opening project</title></head>
        <body style="margin:0;display:grid;place-items:center;height:100vh;background:#1b0713;color:#fff;font-family:system-ui,sans-serif;">
          <div style="text-align:center;">
            <div style="width:34px;height:34px;border:3px solid rgba(255,255,255,.25);border-top-color:#e1c73f;border-radius:50%;margin:0 auto 16px;animation:spin .8s linear infinite;"></div>
            <p style="margin:0;font-size:14px;">Opening project details...</p>
          </div>
          <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
        </body>
      </html>
    `)
  }
  isOpeningProject.value = true
  toastMessage.value = 'Preparing a new tab for the project details...'

  setTimeout(() => {
    if (projectTab) {
      projectTab.location.href = route.href
    }
    toastMessage.value = 'New tab opened for the project details.'

    setTimeout(() => {
      isOpeningProject.value = false
      toastMessage.value = ''
    }, 1200)
  }, 850)
}
</script>

<template>
  <section id="projects" class="projects-section">
    <header class="projects-hero">
      <p class="eyebrow">Selected product builds</p>
      <h1>Project details that help brands feel alive.</h1>
    </header>

    <ProjectCarousel :slides="featuredProjects" :show-default-controls="false" class="carousel">
      <template #default="{ currentIndex, nextSlide, prevSlide, goToSlide }">
        <div class="project-showcase">
          <div class="project-stage">
            <FadeTransition v-for="(slide, index) in featuredProjects" :key="slide.name">
              <article v-show="currentIndex === index" class="project-card">
                <div class="project-card__text">
                  <p class="project-card__timeframe">{{ slide.timeframe }}</p>
                  <div class="project-card__heading">
                    <h2>{{ slide.name }}</h2>
                    <div class="project-card__controls" aria-label="Project carousel controls">
                      <button type="button" aria-label="Previous project" @click="prevSlide">
                        <span class="arrow arrow-left"></span>
                      </button>
                      <button type="button" aria-label="Next project" @click="nextSlide">
                        <span class="arrow arrow-right"></span>
                      </button>
                    </div>
                  </div>
                  <p class="project-card__description">{{ slide.description }}</p>
                  <div class="project-card__actions">
                    <button class="view-more-btn" type="button" @click="viewProject(slide.slug)">View project</button>
                  </div>
                </div>

                <div class="project-card__visual">
                  <a :href="slide.url" target="_blank" rel="noreferrer">
                    <img :src="slide.image" :alt="slide.name" />
                  </a>
                </div>
              </article>
            </FadeTransition>
          </div>

          <aside class="detail-panel">
            <TransitionGroup name="project-list">
              <button
                v-for="(project, cardIndex) in visibleProjects(currentIndex)"
                :key="project.slug"
                class="detail-card"
                :class="{ 'detail-card--active': project.originalIndex === currentIndex }"
                type="button"
                @click="goToSlide(project.originalIndex)"
              >
                <span class="detail-card__status" v-if="cardIndex === 0">Current project</span>
                <p class="detail-card__time">{{ project.timeframe }}</p>
                <h3>{{ project.name }}</h3>
                <div class="detail-card__stack">
                  <span v-for="tool in project.stack" :key="tool">
                    <img v-if="getStackIcon(tool).image" :src="getStackIcon(tool).image" :alt="`${tool} icon`" />
                    <b v-else>{{ getStackIcon(tool).label }}</b>
                    {{ tool }}
                  </span>
                </div>
              </button>
            </TransitionGroup>
          </aside>
        </div>
      </template>
    </ProjectCarousel>

    <Transition name="toast">
      <div v-if="toastMessage" class="project-toast">
        <span class="toast-loader" aria-hidden="true"></span>
        <p>{{ toastMessage }}</p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.projects-section {
  background: linear-gradient(180deg, #15030d 0%, #0b0309 55%, #030203 100%);
  color: #fef9f4;
  padding: clamp(46px, 5vw, 86px) clamp(18px, 4vw, 90px) 96px;
}

.projects-hero {
  max-width: 760px;
  margin-bottom: 28px;
}

.projects-hero h1 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.3rem, 1.55vw, 1.7rem);
  line-height: 1.25;
  margin: 0;
  color: #ffffff;
  background: none;
  -webkit-text-fill-color: #ffffff;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--colororigin);
  margin-bottom: 8px;
}

:deep(.carousel) {
  width: 100%;
}

.project-showcase {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(300px, 1fr);
  gap: 28px;
  align-items: start;
}

.project-stage {
  min-width: 0;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2vw, 36px);
  padding: clamp(20px, 2.2vw, 30px);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45);
}

.project-card__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.project-card__text h2 {
  margin: 8px 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.35rem, 1.75vw, 1.75rem);
  line-height: 1.2;
  letter-spacing: 0;
  color: #fff;
}

.project-card__controls {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.project-card__controls button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.project-card__controls button:hover {
  transform: translateY(-2px);
  border-color: var(--colororigin);
  background: rgba(225, 199, 63, 0.16);
}

.arrow {
  display: block;
  width: 16px;
  height: 16px;
  position: relative;
}

.arrow::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 2px;
  background: currentColor;
  top: 50%;
  left: 2px;
}

.arrow::after {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-left::after {
  left: 2px;
  transform: translateY(-50%) rotate(-135deg);
}

.arrow-right::after {
  right: 2px;
  transform: translateY(-50%) rotate(45deg);
}

.project-card__timeframe {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.56rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.65);
}

.project-card__description {
  max-width: 760px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.74rem;
  line-height: 1.6;
  font-family: var(--font-body);
}

.project-card__visual {
  width: 100%;
  display: flex;
  justify-content: center;
}

.project-card__visual a {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  overflow: hidden;
  border-radius: 18px;
  background: #f4f2ef;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.project-card__visual img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transform: scale(1.28);
  transition: transform 0.8s ease;
}

.project-card__visual img:hover {
  transform: scale(1.32) translateY(-4px);
}

.project-card__actions {
  margin-top: 12px;
}

.view-more-btn {
  min-width: 170px;
  padding: 12px 28px;
  border-radius: 999px;
  border: none;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: #1b030c;
  background: var(--colororigin);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.view-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 52px rgba(0, 0, 0, 0.25);
}

.detail-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.detail-card {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 132px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: inherit;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.detail-card:hover,
.detail-card--active {
  transform: translateY(-2px);
  border-color: var(--colororigin);
  background: rgba(225, 199, 63, 0.07);
  box-shadow: 0 0 0 1px rgba(225, 199, 63, 0.18), 0 20px 44px rgba(225, 199, 63, 0.12);
}

.detail-card__status {
  width: fit-content;
  border-radius: 999px;
  padding: 4px 10px;
  background: rgba(225, 199, 63, 0.14);
  color: #f5da4c;
  font-size: 0.52rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.detail-card__time {
  font-size: 0.54rem;
  letter-spacing: 0.18em;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
}

.detail-card h3 {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.25;
  color: #fef7f2;
}

.detail-card__stack {
  margin-top: auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.detail-card__stack span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.6rem;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #fefcef;
  background: rgba(255, 255, 255, 0.04);
}

.detail-card__stack img,
.detail-card__stack b {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
}

.detail-card__stack img {
  object-fit: contain;
}

.detail-card__stack b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.13);
  font-size: 0.42rem;
  font-weight: 700;
  color: var(--colororigin);
}

.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.35s ease;
}

.project-list-enter-from {
  opacity: 0;
  transform: translateY(22px);
}

.project-list-leave-to {
  opacity: 0;
  transform: translateY(-22px);
}

.project-list-leave-active {
  position: absolute;
}

.project-toast {
  position: fixed;
  right: clamp(18px, 4vw, 44px);
  bottom: clamp(18px, 4vw, 38px);
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: min(360px, calc(100vw - 36px));
  padding: 14px 16px;
  border-radius: 16px;
  background: #1b0713;
  color: #fff;
  border: 1px solid rgba(225, 199, 63, 0.35);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
}

.project-toast p {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
}

.toast-loader {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.26);
  border-top-color: var(--colororigin);
  animation: spin 0.85s linear infinite;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1100px) {
  .project-showcase {
    grid-template-columns: 1fr;
  }

  .detail-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (max-width: 768px) {
  .project-card {
    padding: 20px;
  }

  .project-card__heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
