<script>
import Hello from '@/components/HelloWorld.vue'
import Welcome from '@/components/TheWelcome.vue'
import Myhome from '@/components/MyhomeView.vue'
import Aboutme from '@/components/AboutmeView.vue'
import Tech from '@/components/TechstackView.vue'
// Website images
import Cs from '../assets/images/casestudyad.jpg';
import Tix from '../assets/images/tix.gif';
import Anna from '../assets/images/annagif.gif';
import Paiempire from '../assets/images/paiempiregif.gif';
import Fp from '../assets/images/fpgif.gif';
import Sbjm from '../assets/images/sbjmgif.gif';
import Cstwo from '../assets/images/bbtad.jpg';
import Csthree from '../assets/images/ffwbg.jpg';
import Csfour from '../assets/images/fext.gif';
import Csfive from '../assets/images/trhiad.jpg';
import Cssix from '../assets/images/henrochiead.jpg';
// Graphic design images
import Oneimg from '../assets/images/image1.jpg';
import Twoimg from '../assets/images/image2.jpg';
import Threeimg from '../assets/images/image3.jpg';
import Fourimg from '../assets/images/image4.jpg';
import Fiveimg from '../assets/images/image5.jpg';
import Siximg from '../assets/images/image6.jpg';






export default {
  setup() {
      const allslides = ["image1", "image2", "image3"]
    return {allslides};

  },
  components: {
    linkk: () => import('https://github.com')
  },
  methods:{

    toggleone(){
      this.isshow = true
      this.isshoww = false
      this.isshowww = false
    },

    toggletwo(){
      this.isshow = false
      this.isshoww = true
      this.isshowww = false
    },

    togglethree(){
      this.isshow = false
      this.isshoww = false
      this.isshowww = true
    },

    selectItem(item) {
    this.selectedItem = item.name;
    console.log(this.selectedItem)
    }
  },

  data:function(){
    return{
      carouselSlides : [
      {
          image: Tix, url: "https://tixdemand.com/",
          name: "TixDemand", url: "https://tixdemand.com/",
          timeframe: "Online Ticket Platform",
          description: "Developed an online ticket platform with Vue.js for the frontend and Laravel for the backend, utilizing MySQL for the database. Implemented authentication, admin dashboards, and a personalized admin panel. Recently added a feature to notify event planners of weekly ticket purchases.",
        },
        {
          image: Anna, url: "https://www.annapurna-tiffins.com/",
          name: "Anna", url: "https://www.annapurna-tiffins.com/",
          timeframe: "Food Cart Website",
          description: "Developed a food cart website where customers can learn about the business and view the menu online. Implemented strong SEO practices to ensure top rankings on Google.",
      },
        {
          image: Paiempire, url: "https://paiempire.com.ng/",
          name: "Paiempire", url: "https://paiempire.com.ng/",
          timeframe: "Schedule Real Estate Viewings",
          description: "Developed a web application for scheduling real estate viewings using Vue.js for the frontend and Laravel for the backend, with MySQL as the database. Implemented an admin panel for posting and deleting services, blogs, newsletters, and more.",
      },
        {
          image: Sbjm, url: "https://styledbyjm.com.ng/",
          name: "Styled by Jasmine", url: "https://styledbyjm.com.ng/",
          timeframe: "Real estate web application",
          description: "Developed a full-stack e-commerce website featuring Vue.js for the frontend and Vanilla PHP for the backend, integrated payment processing through Paystack, and implemented diverse delivery fees based on geographic regions. Utilized MySQL for the database. User interface designed with Figma ",
        },
        {
          image: Fp, url: "https://thefriendlyprices.com/",
          name: "Friendly Prices", url: "https://thefriendlyprices.com/",
          timeframe: "Fashion E-commerce website",
          description: "Designed and developed an e-commerce website on WordPress with dynamic delivery fees based on user locations. Implemented a user registration system allowing wholesale access and prices who wish to resell.",
        },
        {
          image: Csfour, url: "https://fextellar.com/",
          name: "Fextellar", url: "https://fextellar.com/",
          timeframe: "Software company website",
          description: "Built with React Js. I Created written content for the official company website, Created all Gifs found on the site with Animation effect in Photoshop. Designed images, icons and banners on the website. ",
          },
        {
          image: Cs, url: "https://beefahsapartments.netlify.app/",
          name: "Beefahs Apartments", url: "https://beefahsapartments.netlify.app/",
          timeframe: "Real estate web application",
          description: "A web app that allows you to book apartments online. For this project, I used React js and built the user interface with Figma ",
        }
        ,
          {
          image: Cstwo, url: "https://bbtfoods.com.ng/",
          name: "BBT Foods", url: "https://bbtfoods.com.ng/",
          timeframe: "Full-Stack E-commerce Website",
          description: "A website that sllows people buy dry meat online. For this project, I created the user interface with Figma, Implemented on my browser with VUE JS and worked with PHP and MYSQL for the backend and database respectively.",
          },
          {
          image: Csthree,
          name: "Fluxxy Frutties Cafe", url: "https://ffwvue.netlify.app/",
          timeframe: "Full-Stack E-commerce Website",
          description: "A website that allows people buy food online. I created the user interface with Figma, Implemented on my browser with VUE JS and worked with PHP and MYSQL for the backend and database respectively.",
          },
          {
          image: Csfive, url: " https://trhi.netlify.app/",
          name: "The Rands help Initiative",
          timeframe: "Charity website",
          description: "Buildt with Html, Css and Vanilla Js. I also designed the user interface of this website",
          ratings: "Reviews",
          },
          {
          image: Cssix, url: "https://henrochie.com/",
          name: "Henrochie",
          timeframe: "Company website",
          description: "User interface design, Developed the design into a fully functional and responsive website viewable across all devices. Buildt with Html, Css and Vanilla js",
          },
      ],

      // Graphic loop
      Allgraphics : [
      {
        image: Oneimg
      },
      {
        image: Twoimg
      },
      {
        image: Threeimg
      },
      {
        image: Fourimg
      },
      {
        image: Fiveimg
      },
      {
        image: Siximg
      },
    ],


      isshow: true,
      isshoww: false,
      isshowww: false,
      selectedItem: null,
      list:[
        {
          name: "Web apps / Websites"
        },
        {
          name: "User Interface (Ui/Ux)"
        },
        {
          name: "Graphics"
        }
      ]
    }
  },

  // data() {
  //   return {
  //     count: 0
  //   }
  // },

  // mounted(){
  //  this.count
  // },

components: { Hello, Welcome, Myhome, Aboutme, Tech },
}

</script>
<template>

<!-- <div className="showcoindeposits" v-if="isshow">
  <div className="coinflexxx" v-for="(depositcoin, i) in depositcoins" :key="i"  @click="selectItem(depositcoin)">

    <div>
      <img :src="depositcoin.Img"/>
                    </div>

                    <div className="mybtc">
                        <h3> {{depositcoin.Coin}} </h3>
                    </div>

</div>
</div> -->

<div id="hero">
  <Myhome />
</div>

<br/>
<br/>
<br/>



  <div className="phbg" id="section1">

    <div className="ph">
        <h1> Project Highlight </h1>
        </div>



        <!-- <div className="ph">
        <h1> Project Highlight </h1>
        </div>

        <div className="selectflex">

          <div className="select" @click="toggleone">
            <h3> Web app / Websites </h3>
        </div>

        <div className="select" @click="toggletwo">
          <h3> Graphics </h3>
        </div>

        </div> -->

        <!-- <div className="select" @click="togglethree">
            <h3> Graphics </h3>
        </div> -->

        <!-- <div className="select" v-for="(onelist, index) in list" :key="index" @click="selectItem(onelist)" >
            <h3 @click="toggle(onelist)">  {{onelist.name}} </h3>
        </div>

        <div className="select">
            <h3> {{onelist.name}} </h3>
        </div>

        <div className="select">
            <h3> {{onelist.name}} </h3>
        </div> -->



        <!-- Showcase -->

    <!-- <div className="gen" v-if="isshoww">
    <Hello className="carousel" v-slot={myimg}>
    <Welcome v-for="(oneslide, index) in allslides" :key="index">
         <div v-show="myimg === index + 1" className="ourimg">
          <img :src="`./src/assets/${oneslide}.jpg`"/>
         </div>
</Welcome>
  </Hello>
</div> -->

<div className="gen" v-if="isshoww">
    <Hello className="carousel" v-slot={myimg}>
    <!-- <Welcome v-for="(oneslide, index) in Allgraphics" :key="index">
         <div v-show="myimg === index + 1" className="ourimg">
          <img :src="oneslide.image"/>
          <p className="mored"> Below is a link to my google drive that contains more of my designs </p>
         </div>
    </Welcome> -->
  </Hello>
</div>


<div className="gen" v-if="isshow">
  <Hello className="carousel" v-slot={myimg}>
    <Welcome v-for="(slide, index) in carouselSlides" :key="index">

  <div v-show="myimg === index + 1" className="scbg">

<div className="scd">
  <li className="scn"> <a :href="slide.url">{{ slide.name }}</a> </li>
<li className="sctf"> {{slide.timeframe}}  </li>
<li className="scdesc"> {{slide.description}}  </li>
<button className="vm"> <a :href="slide.url">  View more </a> </button>
</div>

<div className="scimg">
<li> <a :href="slide.url"> <img :src="slide.image"/> </a> </li>
</div>

</div>

</Welcome>
  </Hello>

    </div>

    <div className="gen" v-if="isshowww">
    <div> Bye World </div>
    </div>


        </div>



        <!-- About view -->

        <Aboutme/>
        <Tech/>

        <div className="reachmainflex">

          <div className="reachmainflextext">

            <h3> Reach out to me: </h3>

        <div className="reachflex">

          <div className="reachflexdiv" id="mail">
            <a href="mailto:thealexdunia@gmail.com?subject=Hello%20Alex&body=I%20need%20,%0A%0A"> <img src="@/assets/images/mail.png"/> </a>
        </div>

        <div className="reachflexdiv" id="github">
          <a href="https://github.com/AlexDunia"  target="_blank"> <img src="@/assets/images/githubicon.png"/> </a>
        </div>

        <div className="reachflexdiv" id="linkedin">
          <a href="https://www.linkedin.com/in/dunia-alex-2933bb1b9/" target="_blank"> <img src="@/assets/images/LINKEDIN.png"/> </a>
        </div>

        <div className="reachflexdiv" id="telegram">
          <a href="https://t.me/Alexdunia" target="_blank"> <img src="@/assets/images/telegramicon.png"/> </a>
        </div>

        <div className="reachflexdiv" id="twitter">
          <a href="https://twitter.com/thealexdunia" target="_blank"> <img src="@/assets/images/twittericon.png"/> </a>
        </div>

        <div className="reachflexdiv" id="devto">
          <a href="https://dev.to/dunia" target="_blank"> <img src="@/assets/images/devto.png"/> </a>
        </div>

        <div className="reachflexdiv" id="hashnode">
          <a href="https://twitter.com/thealexdunia"> <img src="@/assets/images/hashnode.png"/> </a>
        </div>

        </div>

        </div>


        <div className="personflex">

        <div className="personname">
          <h3> Alex Ifeanyi Dunia</h3>
        </div>

          <div class="personfleximg">
          <img src="@/assets/images/adcartoon.png"/>
          </div>

        </div>

        </div>



</template>

<style>


*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family:'Abril Fatface';
}

.ourimg{
  margin:auto;
  align-items:center;
  text-align:center
}

.mored{
  font-size:15px;
  margin-top:17px;
  font-family:'poppins'
}

.reachmainflex{
  display:flex;
  width:82%;
  justify-content:space-between;
  margin:auto;
  padding-bottom:40px;
}

.reachmainflextext h3{
  font-size: 18px;
  color: #4d4c4c;
  font-weight: 100;
  margin-bottom:10px;
}

.reachflex{
  display:flex;
  margin-right:40px;
}

#github {
  transition: transform 1s;
}

#github:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

#mail {
  transition: transform 1s;

}

#mail:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

#linkedin {
  transition: transform 1s;
}

#linkedin:hover {
  transform: rotate(360deg);
  cursor: pointer;
}


#telegram {
  transition: transform 1s;
  /* transform-origin: top; */
}

#telegram:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

#twitter {
  transition: transform 1s;
  /* transform-origin: top; */
}

#twitter:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

#devto {
  transition: transform 1s;
  /* transform-origin: top; */
}

#devto:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

#hashnode {
  transition: transform 1s;
  /* transform-origin: top; */
}

#hashnode:hover {
  transform: rotate(360deg);
  cursor: pointer;
}

.reachflex:hover{
  margin-right:40px;
}

.reachflexdiv img{
  width:35px;
  margin-right: 10px
}

.personflex{
  display:flex;
  align-items:center;
}

.personfleximg img{
  width:50px;
}

.personname h3{
  margin-right:20px;
  font-size: 20px;
    color: #450C2F;
    font-weight: 100;
}

/* This is the second style we are moving */

.scbg {
    position: absolute;
    width: 65%;
    align-items: center;
    display: flex;
    margin:auto;
    top:10px;
    justify-content: space-between;

/*
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 105%;
    padding-top: 100px;
    align-items: center;
    position:absolute;
    max-height: 120%; */
}

.scd {
    margin-top: -20px;
    flex-basis: 50%;
}

.scd .scn {
  color:#450C2F;
    font-size: 26px;
    font-weight: 700;
}

.scd .scn a{
  color:#450C2F;
    font-size: 26px;
    font-weight: 700;
    text-decoration:none;
}

.scd .sctf {
    margin-bottom: 12px;
    font-size: 14px;
    margin-top: 7px;
    font-weight: 400;
    color: black;
    font-family: 'poppins';
}

.scd .scdesc {
    font-size: 14px;
    font-weight: 300;
    width: 85%;
    color: black;
    font-family: 'poppins';
}

.scr {
    margin-top: 15px;
    font-size: 11.6px;
    font-weight: 600;
}

#padd {
    padding-left: 0;
}

.scp {
    margin-top: 13px;
    font-weight: 800;
    font-size: 20px;
}

.vm {

    padding: 14px 30px;
    border-radius: 10px;
    margin-top: 20px;
    background: #450C2F;
    border: none;
    font-family: 'poppins';
}

.vm a{
    font-size: 12px;
    font-weight: 400;
    font-weight: 15px;
    color: #fff;
    border: none;
    text-decoration:none;
    font-family: 'poppins';
}

.scimg {
    flex-basis: 60%;
}

.scimg img {
    width: 100%;
    border-radius: 20px;
    transition:transform 3s;
}

.scimg img:hover {
   cursor:pointer;
   transform:translateX(50px);
   /* transform: scale(1.05) */
}

li {
    list-style-type: none;
}
/* End */

.mainphbg{
  margin-top:70px;
  background: #FCF8E4;
}

.phbg{
    background: #FCF8E4;
    /* height:500px; */
    padding-top:50px;
    padding-bottom:400px;
    /* margin-bottom:70px; */
}

.ph{
   display:flex;
   padding-top: 40px;
   padding-bottom: 80px;
   justify-content: center;
   transition:transform 2s;
}

.ph:hover{
  transform: rotate(360deg);
  cursor:pointer;
}

.ph h1{
    margin:auto;
    color:#450C2F;
    font-size:28px;
    font-weight:100;
}

.selectflex{
    display:flex;
    justify-content: space-around;
    width:75%;
    margin:auto;
}

.select h3{
    margin-top:50px;
    margin-bottom:50px;
    padding:8px;
    padding-left:25px;
    padding-right:25px;
    border-radius:10px;
    font-size:13px;
    font-weight:400;
    font-family: 'poppins';
    border: 1px solid rgba(0, 0, 0, 0.5);
}

/* Showcase styling */

.hello{
  font-family:Abril Fatface;
  font-weight:100;
}

.carousel{
  max-height:100vh;
  /* height:100vh; */
  position:relative;
  width: 100%;
  margin: auto;
}

.gen{
  margin:auto;
}

.omo{
  position:absolute;

  /* newcode */
  position: absolute;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center

  /* top:0; */
  /* width:100%;
  max-height:100%;
  height:100%; */

}

.ourimg img{
  width:300px;
}

/*  MEDIA QUERY */

@media (max-width: 900px) {

/* Nav for Responsive screen */
.scbg {
    /* position: absolute;
    width: 65%;
    align-items: center; */
    display: block;
    /* margin: auto;
    top: 10px;
    justify-content: space-between; */
}

.scd .scdesc {
    font-size: 12px;
    font-weight: 300;
    width: 100%;
    /* color: black;
    font-family: poppins; */
}

.vm {
  display:none;
    /* font-size: 12px;
    padding: 10px 22px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 400;
    font-weight: 15px;
    background: #450C2F;
    color: #fff;
    border: none;
    font-family: poppins; */
}

.scimg img {
    width: 100%;
    margin:auto;
    margin-top:25px;
    border-radius: 20px;
}

.selectflex {
    display: flex;
    justify-content: space-around;
    width: 87%;
    margin: auto;
}

.select h3{
    margin-top:50px;
    margin-bottom:50px;
    padding:8px;
    padding-left:5px;
    padding-right:5px;
    border-radius:10px;
    font-size:10px;
    font-weight:400;
    font-family: 'poppins';
    border: 1px solid rgba(0, 0, 0, 0.5);
}

.reachmainflex {
    display: block;
}


/* .scimg {
    flex-basis: 100%;
} */

}
</style>


