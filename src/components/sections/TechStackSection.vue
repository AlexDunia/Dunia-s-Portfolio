<template>
  <section class="tech-section">
    <div class="techspace">
      <div class="tech">
        <h1>Technologies</h1>
        <p>
          I sketch and wireframe user interfaces with Adobe XD and Figma; I then build for the browser with React.js, HTML, CSS, Vanilla
          JavaScript but I am more Vue.js oriented now. On the backend, I work with PHP and Laravel. For my databases, I work with MySQL
          and XAMPP. I write Linux commands occasionally and use it to interact with my desktop; I also do database seeding and migrations
          directly on my command line. I have three years of graphic design experience with Adobe Photoshop.
        </p>
      </div>

      <div class="stackflex">
        <div class="stackimg">
          <img src="@/assets/images/figmaa.png" alt="Figma logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/react.png" alt="React logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/php.png" alt="PHP logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/xd.png" alt="Adobe XD logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/laravel.png" alt="Laravel logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/github.png" alt="GitHub logo" />
        </div>
        <div class="stackimg">
          <img src="@/assets/images/photoshop.png" alt="Photoshop logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  background: #e1c73f;
  padding: clamp(40px, 6vw, 58px) var(--page-gutter);
  margin-top: 44px;
  margin-bottom: clamp(42px, 7vw, 70px);
}

.techspace {
  width: min(1120px, 100%);
  margin: auto;
}

.tech h1 {
  font-size: 24px;
  color: #450c2f;
  font-family: var(--font-display);
  font-weight: 400;
}

.tech p {
  font-size: clamp(0.82rem, 1.5vw, 0.94rem);
  padding-top: clamp(16px, 3vw, 30px);
  line-height: 1.75em;
  font-family: var(--font-body);
  font-weight: 400;
}

.stackflex {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(74px, 1fr));
  justify-items: center;
  gap: clamp(18px, 4vw, 36px);
  margin-top: clamp(28px, 5vw, 50px);
}

.stackimg {
  display: grid;
  place-items: center;
  min-height: 58px;
}

.stackimg img {
  width: clamp(34px, 7vw, 50px);
}

@media (max-width: 900px) {
  .stackflex {
    grid-template-columns: repeat(auto-fit, minmax(52px, 1fr));
  }
}

@media (max-width: 280px) {
  .tech h1 {
    font-size: 1.1rem;
  }

  .tech p {
    font-size: 0.68rem;
    line-height: 1.65;
  }

  .stackflex {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .stackimg {
    min-height: 38px;
  }

  .stackimg img {
    width: 28px;
  }
}
</style>
