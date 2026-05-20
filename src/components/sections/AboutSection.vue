<script setup>
import Alexone from '@/assets/images/alexone.jpg'
import Alexaward from '@/assets/images/alexaward.jpg'
import Alextwo from '@/assets/images/alextwo.jpg'
</script>

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

    <div id="aboutimages" class="about-images">
      <div class="image-gallery">
        <img :src="Alexone" alt="Alex Dunia photo" />
      </div>
      <div class="image-gallery">
        <img :src="Alexaward" alt="Award photo" />
      </div>
      <div class="image-gallery">
        <img :src="Alextwo" alt="Alex at event" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  width: 82%;
  margin: auto;
  margin-top: 200px;
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
  color: #450c2f;
  font-weight: 100;
}

.about-text p {
  font-weight: 300;
  font-size: 13px;
  color: black;
  font-family: 'Poppins', sans-serif;
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

.about-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 70px;
  margin-bottom: 40px;
}

.image-gallery {
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-gallery img {
  max-width: 100%;
  height: auto;
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

  .about-images {
    display: block;
  }
}
</style>
