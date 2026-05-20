<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import FadeTransition from '@/components/ui/FadeTransition.vue'
import ProjectCarousel from '@/components/ui/ProjectCarousel.vue'

import { featuredProjects, graphicGallery } from '@/constants/portfolioData'

const router = useRouter()

const totalProjects = featuredProjects.length
const curatedProjects = computed(() => featuredProjects.slice(0, 3))
const uniqueStacks = computed(() =>
  [...new Set(featuredProjects.flatMap((project) => project.stack))]
)

const viewProject = (slug) => {
  router.push({ name: 'projectDetail', params: { slug } })
}
</script>

<template>
  <section id="projects" class="projects-section">
    <header class="projects-hero">
      <p class="eyebrow">Everything blends together.</p>
      <h1>Project details that help brands feel alive.</h1>
      <p>
        Every engagement starts with a documented intention—something that mirrors the craft reflected in the visual studies
        on this page. From research to prototypes to production, I partner with teams to keep projects clear, calm, and bold.
      </p>
      <div class="hero-metrics">
        <article>
          <strong>{{ totalProjects }}</strong>
          <span>projects shipped</span>
        </article>
        <article>
          <strong>{{ uniqueStacks.length }}</strong>
          <span>tools rotated through</span>
        </article>
        <article>
          <strong>200+</strong>
          <span>hours of craft</span>
        </article>
      </div>
    </header>

    <div class="projects-layout">
      <div class="carousel-pane">
        <ProjectCarousel :slides="featuredProjects" class="carousel">
          <template #default="{ currentIndex }">
            <FadeTransition v-for="(slide, index) in featuredProjects" :key="slide.name">
              <article v-show="currentIndex === index" class="project-card">
                <div class="project-card__text">
                  <p class="project-card__timeframe">{{ slide.timeframe }}</p>
                  <h2>{{ slide.name }}</h2>
                  <p class="project-card__description">{{ slide.description }}</p>
                  <div class="project-card__actions">
                    <button class="view-more-btn" type="button" @click="viewProject(slide.slug)">View more</button>
                  </div>
                </div>

                <div class="project-card__visual">
                  <a :href="slide.url" target="_blank" rel="noreferrer">
                    <img :src="slide.image" :alt="slide.name" />
                  </a>
                </div>
              </article>
            </FadeTransition>
          </template>
        </ProjectCarousel>
      </div>

      <aside class="detail-panel">
        <div v-for="project in curatedProjects" :key="project.slug" class="detail-card">
          <p class="detail-card__time">{{ project.timeframe }}</p>
          <h3>{{ project.name }}</h3>
          <p class="detail-card__impact">{{ project.impact }}</p>
          <div class="detail-card__stack">
            <span v-for="tool in project.stack" :key="tool">{{ tool }}</span>
          </div>
        </div>
      </aside>
    </div>

    <div class="project-mosaic">
      <p class="mosaic-label">Graphic gestures from the lab</p>
      <div class="mosaic-grid">
        <div v-for="(item, index) in graphicGallery" :key="index" class="mosaic-tile">
          <img :src="item.image" alt="Design touchpoint" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: linear-gradient(180deg, #15030d 0%, #0b0309 55%, #030203 100%);
  color: #fef9f4;
  padding: clamp(48px, 5vw, 96px) clamp(18px, 4vw, 90px) 96px;
}

.projects-hero {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
}

.projects-hero h1 {
  font-family: 'Abril Fatface', 'Times New Roman', serif;
  font-size: clamp(2.1rem, 2.5vw, 2.8rem);
  margin-bottom: 12px;
  color: #fdf6f1;
}

.projects-hero p {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto;
  font-size: 0.88rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.34em;
  font-size: 0.68rem;
  color: var(--colororigin);
  margin-bottom: 10px;
}

.hero-metrics {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.hero-metrics article {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 22px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-metrics strong {
  display: block;
  font-size: 1.2rem;
  color: #fff;
}

.hero-metrics span {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.projects-layout {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.carousel-pane {
  flex: 2;
}

.detail-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-card__time {
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.detail-card h3 {
  margin: 0;
  font-size: 1rem;
  color: #fef7f2;
}

.detail-card__impact {
  font-size: 0.78rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.8);
}

.detail-card__stack {
  margin-top: auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.detail-card__stack span {
  font-size: 0.62rem;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fefcef;
  background: rgba(255, 255, 255, 0.04);
}

:deep(.carousel) {
  width: 100%;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2vw, 36px);
  padding: clamp(22px, 2.5vw, 34px);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45);
}

.project-card__text h2 {
  margin: 10px 0;
  font-size: clamp(1.55rem, 2.1vw, 2.1rem);
  color: #fff;
}

.project-card__timeframe {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.65);
}

.project-card__description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.78rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
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

.project-card__visual img:hover {
  transform: scale(1.32) translateY(-4px);
}

.project-card__actions {
  margin-top: 8px;
}

.view-more-btn {
  width: 100%;
  padding: 12px;
  border-radius: 999px;
  border: none;
  font-family: 'Poppins', sans-serif;
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

.project-mosaic {
  margin-top: 48px;
}

.mosaic-label {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

.mosaic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.mosaic-tile img {
  width: 100%;
  border-radius: 16px;
  height: 140px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1100px) {
  .projects-layout {
    flex-direction: column;
  }

  .detail-panel {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .hero-metrics {
    gap: 18px;
  }

  .project-card {
    padding: 20px;
  }
}
</style>
