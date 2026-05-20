<script setup>
import { computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import { featuredProjects } from '@/constants/portfolioData'

const route = useRoute()
const router = useRouter()

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
            <article class="metric-card">
              <strong>200+</strong>
              <span>Hours of craft</span>
            </article>
          </div>
          <div class="detail-actions">
            <a class="primary-action" :href="project.url" target="_blank" rel="noreferrer">View case study</a>
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
        <h2>Impact & Stack</h2>
        <p class="panel-description">{{ project.impact }}</p>
        <div class="stack-grid">
          <span v-for="tool in stack" :key="tool">{{ tool }}</span>
        </div>
      </aside>
    </section>
  </article>
</template>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: clamp(40px, 6vw, 80px) clamp(18px, 4vw, 90px);
  background: #fff;
  color: #0f0f0f;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.detail-hero {
  background: #ffffff;
  border-radius: 32px;
  padding: clamp(28px, 3vw, 48px);
  border: 1px solid #ece7e1;
  box-shadow: 0 20px 40px rgba(15, 15, 15, 0.08);
  color: #0f0f0f;
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
  font-family: 'Abril Fatface', 'Times New Roman', serif;
  letter-spacing: 0.01em;
}

.detail-lede {
  max-width: 640px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
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
  min-width: 140px;
  background: #f7f5f1;
  border-radius: 18px;
  border: 1px solid #e3dbd2;
  padding: 14px 18px;
  text-align: center;
}

.metric-card strong {
  display: block;
  font-size: 1.1rem;
  color: #1f1f1f;
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
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
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
  border-radius: 24px;
  padding: clamp(24px, 3vw, 36px);
  border: 1px solid #ece6df;
  font-family: 'Poppins', sans-serif;
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
  border-radius: 24px;
  padding: 26px;
  border: 1px solid #ede7e0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 45px rgba(20, 20, 20, 0.08);
}

.detail-panel h2 {
  margin: 0;
  font-size: 1.12rem;
  font-family: 'Abril Fatface', 'Times New Roman', serif;
}

.panel-description {
  margin: 0;
  line-height: 1.6;
  font-size: 0.84rem;
  color: #3b3b3b;
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.stack-grid span {
  padding: 6px 16px;
  border-radius: 999px;
  background: #f1f0ef;
  border: 1px solid #d7d1c9;
  font-size: 0.68rem;
  color: #2c2c2c;
}

.hero-visual {
  margin: 0;
  width: min(460px, 100%);
  aspect-ratio: 16 / 10;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #ededed;
  box-shadow: 0 20px 40px rgba(15, 15, 15, 0.1);
  background: #fdfdfd;
}

.hero-visual img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  height: calc(100% - 46px);
  transform: scale(1.24);
}

.hero-visual figcaption {
  padding: 16px 20px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #676767;
  background: #fff;
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
    padding: clamp(30px, 8vw, 48px);
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
