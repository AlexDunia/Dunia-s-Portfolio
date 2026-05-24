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
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 44px;
  margin-bottom: 70px;
}

.techspace {
  width: 82%;
  margin: auto;
  margin-top: 20px;
}

.tech h1 {
  font-size: 24px;
  color: #450c2f;
  font-family: var(--font-display);
  font-weight: 600;
}

.tech p {
  font-size: 15px;
  padding-top: 30px;
  line-height: 1.75em;
  font-family: var(--font-body);
  font-weight: 400;
}

.stackflex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}

.stackimg {
  margin-top: 50px;
}

.stackimg img {
  width: 50px;
}

@media (max-width: 900px) {
  .stackimg img {
    width: 30px;
  }
}
</style>
