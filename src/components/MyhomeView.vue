
<!-- <script>
import { RouterLink, RouterView } from 'vue-router'

export default{

  }

</script> -->

<script>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default{
       methods: {
       scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Using smooth scroll behavior for a smoother transition
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  }

</script>

<template>
    <div id="section1">
    </div>

   <div className="herobg">

    <div className="heroflex">

    <div className="herotext">
        <h1> Hi, I’m Alex Dunia, <span className="yellow">  A
         developer, designer </span> and   <span className="yellow"> Technical Writer</span>
       <!-- <span className="yellow"> Designer. </span> -->
        </h1>

        <p> I code Web apps for companies and individuals and create the best technical writing materials . Lets talk about your project today   </p>

        <br/>
        <!-- <RouterLink  to="#aboutme" @click="handleClick('section3')"> Click me bitch </RouterLink> -->

        <div className="btnmain">
            <RouterLink  to="#projects" @click="scrollToSection('section2')">
                <button className="btntwo"> See my work </button>
        <button className="btnone"> See my work </button></RouterLink>
        </div>
    </div>

    <div className="heroimg">
        <img src="@/assets/images/adcartoon.png"/>
    </div>

    </div>

</div>
<div id="section2">
    </div>



    <!-- <div className="phbg">


    <div className="ph">
    <h1> Project Highlight </h1>
    </div>

    <div className="selectflex">

    <div className="select">
        <h3>  Web apps / Websites </h3>
    </div>

    <div className="select">
        <h3>  User Interface ( Ui/IUx) </h3>
    </div>

    <div className="select">
        <h3>  Graphic Design </h3>
    </div>

    </div>


    </div> -->

</template>

<style>

:root{
    --colororigin: orange;
    --background:#450C2F;
    --backgroundtwo:blue;
    --foreground-color:orange;
  }

  .bd{
    background:var(--background);
  }


  .changecolor{
    background: var(--backgroundtwo);
  }


.herobg{
    background-color: #450C2F;
    margin:auto;
    padding-top: 140px;
    padding-bottom:130px;
}

.heroflex{
    display:flex;
    justify-content:space-between;
    width:85%;
    margin:auto;
    color:white;
}

.herotext{
    flex-basis:53%;
}

.herotext p{
    font-family:'poppins';
    font-size:15px;
    font-weight:200;
    margin-top:14px;
    opacity: 0; /* Initial opacity set to 0 for the fade-in effect */
    transform: translateY(100%); /* Initial position outside the viewport */

    /* Animation properties */
    animation: slideUp 4s ease-in forwards;
}

.btnmain{
    max-height: 100vh;
    width:30vh;
    /* height: 100vh; */
    position: relative;
    opacity: 0; /* Initial opacity set to 0 for the fade-in effect */
    transform: translateY(100%); /* Initial position outside the viewport */

    /* Animation properties */
    animation: slideUp 6.5s ease-in forwards;
}

.herotext h1 {
    font-weight: 100;
    font-size: 54px;
    line-height: 1.2em;
    opacity: 0; /* Initial opacity set to 0 for the fade-in effect */
    transform: translateY(-100%); /* Initial position outside the viewport */

    /* Animation properties */
    animation: slideIn 2s ease-out forwards; /* Animation duration, timing function, and fill mode */
}

/* Keyframes for the slide-in animation */
@keyframes slideIn {
    to {
        opacity: 1; /* Final opacity set to 1 for fully visible */
        transform: translateY(0); /* Final position at 0 to slide in */
    }
}

@keyframes slideUp {
    to {
        opacity: 1; /* Final opacity set to 1 for fully visible */
        transform: translateY(0); /* Final position at 0 to slide in */
    }
}



/* .heroimg{
    flex-basis:40%;
} */

.heroimg {
    perspective: 500px;
}

.heroimg img {
    width: 300px;
    transition: transform 1s, filter 1.5s;
}

.heroimg img:hover {
    filter: brightness(1.3) saturate(1);
    cursor: pointer;
    transform: rotateY(360deg) translateZ(90px);
}


.yellow{
    color:#E1C73F;
}

.btnone {
    background: white;
    align-items: center;
    padding: 7px 20px;
    font-Weight: 600;
    font-size: 15px;
    Line-height: 32px;
    font-family:'poppins';
    Align-items: Center;
    color: black;
    border: none;
    cursor:pointer;
    transition-property:background-color font-weight;
    transition-duration: 1s;
    position: absolute;
    /* top: 150px; */
    left: 0;
    right: 0;

}

.btntwo {
    position: absolute;
    top: 6px;
    left: 6px;
    width:30.1vh;
    right: 0;
    font-family:'poppins';
    align-items: center;
    padding: 7px 20px;
    font-Weight: 600;
    font-size: 15px;
    Line-height: 32px;
    Align-items: Center;
    color: white;
    /* transition-property:display; */
    border: 2px solid #E1C73F;
    /* transition-duration:3s; */
   background-color: transparent;
}

.btnmain:hover .btntwo {
    display:none;
}

.btnmain:hover .btnone{
    color:#450C2F;
    font-weight:600;
    background: #E1C73F;

}

/* .wlbtnn {
    background: #E1C73F;
    align-items: center;
    padding: 7px 20px;
    font-Weight: 700;
    font-size: 18px;
    Line-height: 32px;
    font-family:Mulish;
    Align-items: Center;
    color: black;
    border: none;

    border-top: 1px solid var(--borderColor);
        border-left: 1px solid var(--borderColor);
} */

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
}

:root {
  --borderColor: #03a9f3;
}

.wlbtnn {
  position: relative;
  width: 140px;
  height: 64px;
  margin: auto;
  border: 1px solid #03a9f3;
  cursor: pointer;
  z-index:3;
}
.wlbtnn::before, .wlbtnn::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    transition: 0.3s ease-in-out;
}
.wlbtnn::before {
    z-index:1;
  top: 7px;
  left: 7px;
  border-top: 1px solid var(--borderColor);
  border-left: 1px solid var(--borderColor);
}

.wlbtnn::after {
    z-index:2;
   right: -10px;
   top: 7px;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
}
.wlbtnn:hover::before, .wlbtnn:hover::after {
  width: calc(100% + 9px);
  height: calc(100% + 9px);
}




.button-background-move:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  /* position: absolute; */
  height: 100%;
  /* top: 7px;
  left: 7px; */
  transition: 0.2s;
}

.not{
    color:#E1C73F;
    font-size:18px;
    font-weight:600;
}


/*  MEDIA QUERY */

@media (max-width: 900px) {

/* Nav for Responsive screen */

.heroflex{
    display:block;
}

.herotext{
    flex-basis:53%;
}

/* .herotext p{
    font-family:'poppins';
    font-size:12px;
    font-weight:200;
    margin-top:15px;
    line-height:1.7em;
    width:80%;
} */


.heroimg {
  margin-top:100px;
  text-align:center;
  justify-content:center;
}

.heroimg img{
 width:300px;
}

.herotext p {
    font-family: 'poppins';
    font-size: 15.5px;
    font-weight: 200;
    margin-top: 15px;
    line-height: 1.7em;
    width:100%;
    margin-bottom:10px;
}

.herotext h1 {
    font-weight: 100;
    font-size: 42px;
    width: 100%;
    line-height: 1.5em;
}

.herobg{
    padding-top: 140px;
    padding-bottom:130px;
}


.btnmain {
    max-height: 100vh;
    width: 25vh;
    /* height: 100vh; */
    position: relative;
}

.btntwo {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 25.1vh;
    right: 0;
    font-family: 'poppins';
    align-items: center;
    padding: 7px 20px;
}

.btnone {
    font-size: 17px;
}



}

</style>