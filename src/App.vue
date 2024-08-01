<script>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      shownav: false,
      showicon: false,
    };
  },

  methods: {
    navtoggle() {
      this.shownav = !this.shownav;
    },
    changecolor() {
      if (localStorage.getItem("togglemode") === "yes") {
        this.disabledm();
      } else {
        this.enabledm();
      }
      this.showicon = !this.showicon;
    },
    toggleIconClass() {
      return this.showicon ? 'fa-solid fa-toggle-on' : 'fa-solid fa-toggle-off';
    },
    enabledm() {
      localStorage.setItem("togglemode", "yes");
      document.body.classList.add("bd");
      document.body.classList.remove("changecolor");
      console.log('Toggle color working...');
    },
    disabledm() {
      localStorage.setItem("togglemode", "no");
      document.body.classList.remove("bd");
      document.body.classList.add("changecolor");
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<template>

  <div className="fnav" id="hero">

    <div className="fnavv">

      <div class="fnavimg">
        <img src="@/assets/images/add.png" />
      </div>

      <div className="fnavlinks">
        <RouterLink to="#home" @click="scrollToSection('section1')"> Home </RouterLink>
        <RouterLink to="#projects" @click="scrollToSection('section2')"> Projects</RouterLink>
        <RouterLink to="#aboutme" @click="scrollToSection('section3')"> About me </RouterLink>
        <RouterLink to="#contact" @click="scrollToSection('section4')"> Contact </RouterLink>
        <a href="https://dev.to/dunia"> Blog </a>
      </div>

      <!-- <div class="changecolors">
  <i :class="toggleIconClass()" @click="changecolor()"></i>
  <i class="fa-solid fa-toggle-on"  @click="changecolor()"></i>
</div> -->

      <!-- <div>
  <i class="fa-solid fa-toggle-off"></i>
</div> -->

      <div class="fnavimgcartoon">
        <img src="@/assets/images/adcartoon.png" />
      </div>

    </div>
  </div>

  <div className="fnavvv" id="hero">

    <div className="secondfnavv">

      <div class="secondfnavimg">
        <img src="@/assets/images/add.png" />
      </div>


      <div class="secondfnavimgcartoon">

        <div class="navflexx" @click="navtoggle()" v-if="!shownav">
          <i class="fa-solid fa-bars fa-2x"> </i>
        </div>

        <div class="navflexx" @click="navtoggle()" v-if="shownav">
          <i class="fa-solid fa-xmark fa-2x"></i>
        </div>

        <div>
          <img src="@/assets/images/adcartoon.png" />
        </div>

      </div>

    </div>

    <div className="secondfnavlinks" v-if="shownav">
      <RouterLink to="#home" @click="scrollToSection('section1')"> Home </RouterLink>
      <RouterLink to="#projects" @click="scrollToSection('section2')"> Projects</RouterLink>
      <RouterLink to="#aboutme" @click="scrollToSection('section3')"> About me </RouterLink>
      <RouterLink to="#contact" @click="scrollToSection('section4')"> Contact </RouterLink>
      <a href="https://dev.to/dunia"> Blog </a>

    </div>

  </div>


  <br />
  <br />
  <br />
  <!-- <h1 id="section1"> Hello Alex </h1> -->

  <RouterView :scrollToSection="scrollToSection" />

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


body {
  font-family: 'Abril Fatface';
}

.fnavvv {
  display: none;
}

.fnav {
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  z-index: 3;
  width: 100%;
  box-shadow: rgba(74, 74, 74, 0.1) 5px 5px 10px;
  background: white;
}

.fnavv {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.fnavimg img {
  width: 170px;
}

.fnavimgcartoon img {
  width: 50px;
}

.fnavlinks a {
  text-decoration: none;
  font-family: poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);

}

/* .secondfnavlinks a{
  text-decoration:none;
  font-family: poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin-left:60px;
  color: rgba(0, 0, 0, 0.8);

} */


@media (max-width: 900px) {
  .fnavimg img {
    width: 100px;
  }

  .fnavimgcartoon img {
    width: 30px;
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

  .fnav {
    display: none;
  }

  .fnavvv {
    display: block;
    background-color: white;
    padding-top: 20px;
    z-index: 10;
    padding-bottom: 10px;
    position: fixed;
    width: 100%;
  }


  /* .secondfnavv{
    display: flex;
    margin:auto;
    justify-content: space-between;
    padding-bottom: 0;


    display: flex;
    background-color: #2d2c2c;
    padding-top: 20px;
    z-index: 10;
    padding-bottom: 20px;
    position: fixed;
    width: 85%;
} */

  .secondfnavimgcartoon {
    display: flex;
    justify-content: space-between;
  }

  .secondfnavimgcartoon i {
    margin-right: 40px;
    font-size: 16px;
    padding: 7px;
    border-radius: 3px;
    background: rgb(236, 236, 236);
  }


  .secondfnavlinks a {
    color: black;
    text-decoration: none;
    margin-top: 24px;
    display: block;
    margin: auto;
    margin-bottom: 30px;
    font-family: 'poppins';
    justify-content: center;
  }

  .secondfnavlinks {
    padding-top: 35px;
    width: 80%;
    margin: auto;
    margin-bottom: 35px;
  }

  .secondfnavimgcartoon img {
    width: 30px;
  }


}
</style>
