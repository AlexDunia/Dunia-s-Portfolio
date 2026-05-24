<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import FigIcon from '@/assets/images/figmaa.png'
import GithubIcon from '@/assets/images/github.png'
import LaravelIcon from '@/assets/images/laravel.png'
import PhotoshopIcon from '@/assets/images/photoshop.png'
import PhpIcon from '@/assets/images/php.png'
import ReactIcon from '@/assets/images/react.png'
import VueIcon from '@/assets/images/vue.png'
import XdIcon from '@/assets/images/xd.png'
import { featuredProjects } from '@/constants/portfolioData'

const route = useRoute()
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

const slug = computed(() => route.params.slug)
const project = computed(() => featuredProjects.find((item) => item.slug === slug.value))

watch(
  project,
  (value) => {
    if (!value) {
      router.replace({ name: 'home' })
    }
  },
  { immediate: true }
)

const detailParagraphs = computed(() => {
  if (!project.value) {
    return []
  }

  return project.value.details ?? [project.value.description]
})

const stats = computed(() => (project.value?.stats ? project.value.stats : []))
const stack = computed(() => (project.value?.stack ? project.value.stack : []))
const impactPoints = computed(() => {
  if (!project.value) {
    return []
  }

  return [project.value.impact, ...(project.value.details ?? [])].filter(Boolean).slice(0, 3)
})

const getStackIcon = (tool) => stackIcons[tool] ?? { label: tool.slice(0, 2).toUpperCase() }

const openLiveProject = () => {
  if (!project.value || isOpeningProject.value) {
    return
  }

  const projectTab = window.open('about:blank', '_blank')
  if (projectTab) {
    projectTab.opener = null
    projectTab.document.write(`
      <html>
        <head><title>Opening live project</title></head>
        <body style="margin:0;display:grid;place-items:center;height:100vh;background:#1b0713;color:#fff;font-family:system-ui,sans-serif;">
          <div style="text-align:center;">
            <div style="width:34px;height:34px;border:3px solid rgba(255,255,255,.25);border-top-color:#e1c73f;border-radius:50%;margin:0 auto 16px;animation:spin .8s linear infinite;"></div>
            <p style="margin:0;font-size:14px;">Opening live project...</p>
          </div>
          <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
        </body>
      </html>
    `)
  }
  isOpeningProject.value = true
  toastMessage.value = 'Preparing a new tab for the live project...'

  setTimeout(() => {
    if (projectTab) {
      projectTab.location.href = project.value.url
    }
    toastMessage.value = 'New tab opened. Enjoy the project preview.'

    setTimeout(() => {
      isOpeningProject.value = false
      toastMessage.value = ''
    }, 1200)
  }, 900)
}
</script>

<template>
  <article class="project-detail" v-if="project">
    <header class="detail-hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">{{ project.timeframe }}</p>
          <h1>{{ project.name }}</h1>
          <p class="detail-lede">{{ project.description }}</p>
          <div class="hero-metrics">
            <article v-for="item in stats" :key="item.label" class="metric-card">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </article>
          </div>
          <div class="detail-actions">
            <button class="primary-action" type="button" @click="openLiveProject">View live project</button>
            <RouterLink class="ghost-action" to="/">Back to home</RouterLink>
          </div>
        </div>
        <figure class="hero-visual">
          <img :src="project.image" :alt="project.name" />
          <figcaption>Live preview opens in a new tab.</figcaption>
        </figure>
      </div>
    </header>

    <section class="detail-body">
      <div class="detail-copy">
        <p v-for="paragraph in detailParagraphs" :key="paragraph">{{ paragraph }}</p>
      </div>
      <aside class="detail-panel">
        <h2>Impact</h2>
        <ul class="impact-list">
          <li v-for="point in impactPoints" :key="point">{{ point }}</li>
        </ul>
        <h2>Stack</h2>
        <div class="stack-grid">
          <span v-for="tool in stack" :key="tool">
            <img v-if="getStackIcon(tool).image" :src="getStackIcon(tool).image" :alt="`${tool} icon`" />
            <b v-else>{{ getStackIcon(tool).label }}</b>
            {{ tool }}
          </span>
        </div>
      </aside>
    </section>

    <Transition name="toast">
      <div v-if="toastMessage" class="project-toast">
        <span class="toast-loader" aria-hidden="true"></span>
        <p>{{ toastMessage }}</p>
      </div>
    </Transition>
  </article>
</template>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: clamp(128px, 12vw, 154px) clamp(18px, 4vw, 90px) clamp(48px, 6vw, 80px);
  background: linear-gradient(180deg, #fff 0%, #fbfaf8 100%);
  color: #0f0f0f;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.detail-hero {
  background: #ffffff;
  border-radius: 26px;
  padding: clamp(28px, 3vw, 48px);
  border: 1px solid #ece7e1;
  box-shadow: 0 24px 70px rgba(15, 15, 15, 0.08);
  color: #0f0f0f;
  animation: detailRise 0.5s ease both;
}

.hero-grid {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: clamp(32px, 5vw, 56px);
  flex-wrap: wrap;
}

.hero-copy {
  flex: 1;
  min-width: 280px;
}

.detail-hero h1 {
  margin: 12px 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0;
}

.detail-lede {
  max-width: 640px;
  margin: 0;
  font-family: var(--font-body);
  font-weight: 300;
  color: #2f2f2f;
  line-height: 1.7;
  font-size: 0.86rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.62rem;
  color: var(--colororigin);
}

.hero-metrics {
  margin-top: 32px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.metric-card {
  min-width: 160px;
  background: #f7f5f1;
  border-radius: 16px;
  border: 1px solid #e3dbd2;
  padding: 14px 18px;
  text-align: left;
}

.metric-card strong {
  display: block;
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: #1f1f1f;
  line-height: 1.35;
}

.metric-card span {
  font-size: 0.65rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #7a7a7a;
}

.detail-actions {
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}

.primary-action,
.ghost-action {
  padding: 12px 34px;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.primary-action {
  background: var(--colororigin);
  color: #1b030c;
  border: none;
  box-shadow: 0 16px 32px rgba(225, 199, 63, 0.35);
}

.ghost-action {
  border: 1px solid #1f1f1f;
  color: #1f1f1f;
  background: transparent;
}

.primary-action:hover,
.ghost-action:hover {
  transform: translateY(-2px);
}

.detail-body {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: clamp(24px, 3vw, 40px);
}

.detail-copy {
  background: #f8f6f2;
  border-radius: 20px;
  padding: clamp(24px, 3vw, 36px);
  border: 1px solid #ece6df;
  font-family: var(--font-body);
  line-height: 1.8;
  color: #1d1d1f;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 20px 40px rgba(15, 15, 15, 0.08);
}

.detail-copy p {
  margin: 0;
  font-size: 0.84rem;
}

.detail-panel {
  background: #fff;
  border-radius: 20px;
  padding: 26px;
  border: 1px solid #ede7e0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 20px 45px rgba(20, 20, 20, 0.08);
}

.detail-panel h2 {
  margin: 0;
  font-size: 1.12rem;
  font-family: var(--font-display);
  font-weight: 600;
}

.impact-list {
  display: grid;
  gap: 10px;
  margin: 0 0 6px;
  padding: 0;
  list-style: none;
}

.impact-list li {
  padding-left: 18px;
  line-height: 1.6;
  font-size: 0.82rem;
  color: #3b3b3b;
}

.impact-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--colororigin);
  box-shadow: 0 0 0 4px rgba(225, 199, 63, 0.2);
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2px;
}

.stack-grid span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 13px;
  border-radius: 999px;
  background: #f1f0ef;
  border: 1px solid #d7d1c9;
  font-size: 0.68rem;
  color: #2c2c2c;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.stack-grid span:hover {
  transform: translateY(-2px);
  border-color: var(--colororigin);
  background: #fff8d8;
}

.stack-grid img,
.stack-grid b {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
}

.stack-grid img {
  object-fit: contain;
}

.stack-grid b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(69, 12, 47, 0.1);
  color: var(--primary);
  font-size: 0.48rem;
  font-weight: 800;
}

.hero-visual {
  margin: 0;
  width: min(460px, 100%);
  aspect-ratio: 16 / 10;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid #ededed;
  box-shadow: 0 20px 40px rgba(15, 15, 15, 0.1);
  background: #fdfdfd;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.hero-visual:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 70px rgba(15, 15, 15, 0.14);
}

.hero-visual img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  height: calc(100% - 46px);
  transform: scale(1.24);
  transition: transform 0.55s ease;
}

.hero-visual:hover img {
  transform: scale(1.29);
}

.hero-visual figcaption {
  padding: 16px 20px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #676767;
  background: #fff;
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

@keyframes detailRise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .detail-body {
    grid-template-columns: 1fr;
  }
  .hero-grid {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .project-detail {
    padding: 110px clamp(22px, 8vw, 48px) clamp(30px, 8vw, 48px);
  }

  .detail-hero {
    padding: clamp(24px, 5vw, 36px);
  }

  .detail-body {
    gap: 20px;
  }

  .hero-visual {
    width: 100%;
  }
}
</style>
