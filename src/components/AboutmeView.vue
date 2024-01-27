<script>
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

</template>

<style>
/* About styling */

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

.aboutimg img{
 width:300px;
}

/* end About styling */

@media (max-width: 900px) {

/* Nav for Responsive screen */

.aboutflex {
    display: block;
    /* justify-content: space-between;
    margin: auto;
    width: 82%;
    margin-top: 200px; */
}

.aboutimg {
  margin-top:40px;
  text-align:center;
  justify-content:center;
}

.aboutimg img{
 width:300px;
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