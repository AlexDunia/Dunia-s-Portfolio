<template>
  <section id="aboutme" class="about-section">
    <div class="about-flex">
      <div class="about-text">
        <h1>About me</h1>
        <p>
          I am a multitasking software developer passionate about building solutions for everyday people. I have three years of design
          experience, two years of front-end development experience, and one year of full-stack development experience. My skill set is
          diverse and I am easy to work with. I write articles and create social media content for fun, a friendly neighborhood tech bro,
          if you will.
        </p>
      </div>

      <div class="about-img">
        <img src="@/assets/images/dunia.png" alt="Dunia portrait" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  width: 100%;
  margin: 0;
  margin-top: 120px;
  padding: 76px 9%;
  background: #ffffff;
}

.about-flex {
  display: flex;
  justify-content: space-between;
}

.about-text {
  flex-basis: 40%;
}

.about-text h1 {
  font-size: 24px;
  color: var(--primary);
  font-family: var(--font-display);
  font-weight: 600;
}

.about-text p {
  font-weight: 400;
  font-size: 13px;
  color: #111111;
  font-family: var(--font-body);
  line-height: 1.8em;
  margin-top: 20px;
}

.about-img {
  perspective: 1000px;
}

.about-img img {
  width: 300px;
  transition: transform 3s, filter 1.5s;
}

.about-img img:hover {
  width: 320px;
  filter: brightness(1.3) saturate(1);
  cursor: pointer;
  transform: rotateX(360deg) translate(10px);
}

@media (max-width: 900px) {
  .about-flex {
    display: block;
  }

  .about-img {
    margin-top: 40px;
    text-align: center;
  }

  .about-img img {
    width: 300px;
  }

}
</style>
