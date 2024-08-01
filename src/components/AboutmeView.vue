<script setup>
import Alexone from '../assets/images/alexone.jpg';
import Alexaward from '../assets/images/alexaward.jpg';
import Alextwo from '../assets/images/alextwo.jpg';
</script>
<template>
  <div id="section3">
    </div>

    <div className="aboutflex">

<div className="abouttext">
  <h1> About me </h1>
  <p>  I am a multi tasking software developer passionate about buidling solutions for everyday people. I have three years of design experience,
    two years of front end development experience and one year full stack development experience. My skillset is diverse and I am easy to work with,
    I write articles and create social media content for fun, A friendly neighbourhood tech bro, if you will.
    <!-- My work rate is
    extreme and I put in my best in every project I work on. My skillset is diverse and I am easy to work with,
    A friendly neighbourhood tech bro, if you will. I write articles and create social media content for fun. -->
 </p>
</div>

<div className="aboutimg">
<img src="@/assets/images/dunia.png"/>
</div>

</div>

<div id="aboutimages">

  <div class="imagegallery">
    <img :src="Alexone" />
  </div>

  <div class="imagegallery">
    <img :src="Alexaward" />
  </div>

  <div class="imagegallery">
    <img :src="Alextwo" />
  </div>
</div>

</template>

<style>
/* About styling */

#aboutimages {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 82%;
  flex-wrap: wrap;
}

.imagegallery {
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:70px;
}

.imagegallery img {
  max-width: 100%;
  height: auto;
}

.aboutflex{
  display:flex;
  justify-content:space-between;
  margin:auto;
  width:82%;
  margin-top:200px;
}

.abouttext {
  flex-basis:40%;
}

.abouttext h1{
  font-size:30px;
  color:#450C2F;
  font-weight:100;
}

.abouttext p{
  font-weight:300;
  font-size:16px;
  color:black;
  font-family:'poppins';
  line-height:2em;
  margin-top:20px;
}

/* .aboutimg {
  margin-top:40px;
  text-align:center;
  justify-content:center;
} */

.aboutimg{
  perspective:1000px;
}

.aboutimg img{
 width:300px;
 transition: transform 3s, filter 1.5s;
}

.aboutimg img:hover{
  width:320px;
  filter: brightness(1.3) saturate(1);
    cursor: pointer;
    font-size:50px;
    transform: rotateX(360deg) translate(10px);
}

@keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }

/* end About styling */

@media (max-width: 900px) {

/* Nav for Responsive screen */

#aboutimages {
  display: block;
}

.aboutflex {
    display: block;
}

.aboutimg {
  margin-top:40px;
  text-align:center;
  justify-content:center;
}

.aboutimg img{
 width:300px;
}

.aboutimg img:hover{

 cursor:pointer;
}

/* .abouttext h1 {
    font-size: 26px;
}

.abouttext p {
    font-size: 13px;
    color: black;
    line-height: 2.5em;
    margin-top: 20px;
} */
}
</style>